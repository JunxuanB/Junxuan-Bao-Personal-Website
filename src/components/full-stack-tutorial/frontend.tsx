import { useEffect, useState } from "react";
import { Card, Col, Flex, Row, Typography, Image, Tag, Button, message } from "antd"
import { DeleteOutlined, MinusCircleOutlined, PlusCircleOutlined } from "@ant-design/icons";
import Decimal from 'decimal.js';
import axios from 'axios';

type Lang = 'en' | 'zh';
const strings = {
    zh: { shop: '水果商城 🍎', price: '单价：', sale: '折后价：', stock: '库存：', add: '加入购物车', cart: '购物车', qty: '数量：', total: '总价：', paid: '已结算', checkout: '结算', hide: '隐藏', testPage: '测试页面', count: '当前计数：', plus: ' [点击 +1] ' },
    en: { shop: 'Fruit Store 🍎', price: 'Price: ', sale: 'Sale price: ', stock: 'Stock: ', add: 'Add to cart', cart: 'Cart', qty: 'Qty: ', total: 'Total: ', paid: 'Checked out', checkout: 'Check out', hide: 'Hide', testPage: 'Test page', count: 'Count: ', plus: ' [click +1] ' }
};

export const Cart = ({ lang = 'zh' }: { lang?: Lang }) => {
    const t = strings[lang];
    const { Title, Text } = Typography;

    type Product = {
        id: number,
        name: string,
        price: number,
        discount: number,
        stock: number,
        image: string,
        realPrice: number
    }

    const [products, setProducts] = useState<Product[]>([]);

    const [cart, setCart] = useState<
        {
            id: number,
            quantity: number
        }[]
    >([]);

    const total = () => {
        let sum = new Decimal(0);
        cart.forEach(item => {
            const product = products.find(product => product.id === item.id);
            if (product) {
                sum = sum.plus(new Decimal(product.realPrice).times(item.quantity));
            }
        });
        return sum.toDecimalPlaces(2).toNumber();
    }

    const updateCart = (id: number, quantity: number) => {
        // check if stock is enough
        const product = products.find(product => product.id === id);
        if (!product || product.stock < quantity) {
            return;
        }
        let newCart = [...cart];
        let found = false;
        newCart.forEach(item => {
            if (item.id === id) {
                // Update quantity
                item.quantity += quantity;
                found = true;
                if (item.quantity <= 0) {
                    // Remove from cart
                    newCart = newCart.filter(item => item.id !== id);
                }
            }
        });
        if (!found && quantity > 0) {
            newCart.push({ id, quantity });
        }
        setCart(newCart);
        // Update stock
        const updateProducts = [...products]; // copy not pointing to
        updateProducts.forEach(product => {
            if (product.id === id) {
                product.stock -= quantity;
            }
        });
        setProducts(updateProducts);
    }

    useEffect(() => {
        axios.get('https://junxuanb.com/api/products.json')
            .then(response => {
                const newProducts = response.data.products as Product[];
                newProducts.forEach(product => {
                    // product.realPrice = product.price - product.discount;
                    // fixes $2.6900000000000004
                    product.realPrice = new Decimal(product.price).minus(product.discount).toDecimalPlaces(2).toNumber();

                });
                setProducts(newProducts);
            });
    }, []);

    return (
        <Card style={{ marginTop: 20 }}>
            <Row>
                <Col span={16}>
                    <Title level={3} style={{ marginTop: 0, color: 'black' }}>{t.shop}</Title>
                    <Flex gap={5} wrap>
                        {products.map(product => (
                            <Card key={product.id}>
                                <Flex gap={1} vertical>
                                    <Title level={5} style={{ marginTop: -10 }}>
                                        <Tag color="cyan">#{product.id}</Tag>
                                        {product.name}
                                    </Title>
                                    <Text delete={product.discount > 0}>{t.price}${product.price}</Text>
                                    {product.discount > 0 && <Text mark>{t.sale}${product.realPrice}</Text>}
                                    <Text type="secondary">{t.stock}{product.stock}</Text>
                                    <Image
                                        width={100}
                                        src={product.image}
                                    />
                                    <Button style={{ marginTop: 10 }} onClick={() => updateCart(product.id, 1)} disabled={product.stock <= 0}>{t.add}</Button>
                                </Flex>
                            </Card>
                        ))}
                    </Flex>
                </Col>
                <Col span={8}>
                    <Card title={t.cart}>
                        <Flex gap={5} vertical>
                            {cart.map(item => (
                                <Card key={item.id} size="small" style={{ marginBottom: 10 }}>
                                    <DeleteOutlined style={{ marginRight: 10, color: 'red' }} onClick={() => updateCart(item.id, -item.quantity)} />
                                    {products.find(product => product.id === item.id)?.name} - ${products.find(product => product.id === item.id)?.realPrice} |
                                    {t.qty}<MinusCircleOutlined onClick={() => updateCart(item.id, -1)} /> {item.quantity} <PlusCircleOutlined onClick={() => updateCart(item.id, +1)} />
                                </Card>
                            ))}
                            <Title level={5} style={{ color: 'black' }}>{t.total}${total()}</Title>
                            <Button type="primary" onClick={() => { message.success(t.paid); setCart([]) }}>{t.checkout}</Button>
                        </Flex>
                    </Card>
                </Col>
            </Row>
        </Card>
    )
}

interface NoticeProps {
    title: string;
    content: string;
    closable?: boolean;
    lang?: Lang;
}

export const Notice = ( props: NoticeProps ) => {
  const [closed, setClosed] = useState(false);
  return (
    (!closed || !props.closable) && // hidden once closed
    <div
      style={{
        width: '100%',
        border: '1px dotted #aaa',
        borderRadius: '5px',
        padding: '10px',
        position: 'relative',
        backgroundColor: '#f9f9f9',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
      }}
    >
      <h4
        style={{
          margin: 0,
          paddingBottom: '5px',
          fontSize: '16px',
          color: '#333',
          borderBottom: '1px solid #ddd',
        }}
      >
        {props.title}

        {props.closable && <Button
        type="link"
        onClick={() => setClosed(!closed)}
        style={{
          position: 'absolute',
          right: '0px',
          top: '5px',
          fontSize: '14px',
        }}
        >
          {strings[props.lang ?? 'zh'].hide}
        </Button>}
      </h4>
      <p
        style={{
          margin: '10px 0 0',
          fontSize: '14px',
          color: '#555',
        }}
      >
        {props.content}
      </p>
    </div>
  );
};





// A component that accepts JSX children
export const Template = ( props: { children: JSX.Element; lang?: Lang } ) => {
  return (
    <div
      style={{
        width: '100%',
        padding: '10px',
        backgroundColor: '#f9f9f9',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
        color: '#333',
      }}
    >
      <h3 style={{color: '#333'}}>{strings[props.lang ?? 'zh'].testPage}</h3>
      {props.children}
    </div>
  );
}

export const CounterA = ({ lang = 'zh' }: { lang?: Lang }) => {
  let count = 0;
  return (
    <div>
      {strings[lang].count}{count}
      <a onClick={() => count++}>{strings[lang].plus}</a>
    </div>
  );
}

export const CounterB = ({ lang = 'zh' }: { lang?: Lang }) => {
  const [count, setCount] = useState(0);
  return (
    <div>
      {strings[lang].count}{count}
      <a onClick={() => setCount(count + 1)}>{strings[lang].plus}</a>
    </div>
  );
}
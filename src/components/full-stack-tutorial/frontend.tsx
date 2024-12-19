import { useEffect, useState } from "react";
import { Card, Col, Flex, Row, Typography, Image, Tag, Button, message } from "antd"
import { DeleteOutlined, MinusCircleOutlined, PlusCircleOutlined } from "@ant-design/icons";
import Decimal from 'decimal.js';
import axios from 'axios';

export const Cart = () => {
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
                    // 解决 $2.6900000000000004
                    product.realPrice = new Decimal(product.price).minus(product.discount).toDecimalPlaces(2).toNumber();

                });
                setProducts(newProducts);
            });
    }, []);

    return (
        <Card style={{ marginTop: 20 }}>
            <Row>
                <Col span={16}>
                    <Title level={3} style={{ marginTop: 0, color: 'black' }}>水果商城 🍎</Title>
                    <Flex gap={5} wrap>
                        {products.map(product => (
                            <Card key={product.id}>
                                <Flex gap={1} vertical>
                                    <Title level={5} style={{ marginTop: -10 }}>
                                        <Tag color="cyan">#{product.id}</Tag>
                                        {product.name}
                                    </Title>
                                    <Text delete={product.discount > 0}>单价：${product.price}</Text>
                                    {product.discount > 0 && <Text mark>折后价：${product.realPrice}</Text>}
                                    <Text type="secondary">库存：{product.stock}</Text>
                                    <Image
                                        width={100}
                                        src={product.image}
                                    />
                                    <Button style={{ marginTop: 10 }} onClick={() => updateCart(product.id, 1)} disabled={product.stock <= 0}>加入购物车</Button>
                                </Flex>
                            </Card>
                        ))}
                    </Flex>
                </Col>
                <Col span={8}>
                    <Card title="购物车">
                        <Flex gap={5} vertical>
                            {cart.map(item => (
                                <Card key={item.id} size="small" style={{ marginBottom: 10 }}>
                                    <DeleteOutlined style={{ marginRight: 10, color: 'red' }} onClick={() => updateCart(item.id, -item.quantity)} />
                                    {products.find(product => product.id === item.id)?.name} - ${products.find(product => product.id === item.id)?.realPrice} |
                                    数量：<MinusCircleOutlined onClick={() => updateCart(item.id, -1)} /> {item.quantity} <PlusCircleOutlined onClick={() => updateCart(item.id, +1)} />
                                </Card>
                            ))}
                            <Title level={5} style={{ color: 'black' }}>总价：${total()}</Title>
                            <Button type="primary" onClick={() => { message.success('已结算'); setCart([]) }}>结算</Button>
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
}

export const Notice = ( props: NoticeProps ) => {
  const [closed, setClosed] = useState(false);
  return (
    (!closed || !props.closable) && // 如果 closed 为 true 则不显示
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
          隐藏
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





// 一个接受 JSX 元素的函数
export const Template = ( props: { children: JSX.Element } ) => {
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
      <h3 style={{color: '#333'}}>测试页面</h3>
      {props.children}
    </div>
  );
}

export const CounterA = () => {
  let count = 0;
  return (
    <div>
      当前计数：{count}
      <a onClick={() => count++}> [点击 +1] </a>
    </div>
  );
}

export const CounterB = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      当前计数：{count}
      <a onClick={() => setCount(count + 1)}> [点击 +1] </a>
    </div>
  );
}
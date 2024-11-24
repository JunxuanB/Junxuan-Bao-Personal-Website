interface NoticeProps {
    title: string;
    content: string;
}

export const Notice = ( props: NoticeProps ) => {
  return (
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
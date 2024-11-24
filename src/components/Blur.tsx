import React, { useState, type ReactNode } from 'react';

// 定义组件的 Props 类型
interface RevealAnswerProps {
  children: ReactNode; // 支持嵌套的 React 节点（Markdown 或其他内容）
  isEnglish?: boolean; // 是否为英文模式
}

const RevealAnswer: React.FC<RevealAnswerProps> = (
  { children, isEnglish = true }
) => {
  const [revealed, setRevealed] = useState(false);

  const handleClick = () => setRevealed(true);

  return (
    <div
      style={{
        display: 'inline-block',
        cursor: 'pointer',
        padding: '10px',
        backgroundColor: 'transparent',
        transition: 'all 0.3s ease',
        borderRadius: '5px',
        position: 'relative',
        width: '100%',
      }}
      onClick={handleClick}
    >
      <div
        style={{
          filter: revealed ? 'none' : 'blur(5px)',
          color: revealed ? '#000' : '#000',
          transition: 'filter 0.3s ease',
        }}
      >
        {children}
      </div>
      {!revealed && (
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            padding: '5px 10px',
            borderRadius: '5px',
            color: '#000',
            fontWeight: 'bold',
            pointerEvents: 'none',
          }}
        >
          {isEnglish ? 'Click to reveal answer' : '点击查看答案'}
        </div>
      )}
    </div>
  );
};

export default RevealAnswer;
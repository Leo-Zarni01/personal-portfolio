import ReactCurvedText from 'react-curved-text';
const CurvedText = () => {
  return (
    <ReactCurvedText
      width={300}
      height={300}
      cx={150}
      cy={150}
      rx={100}
      ry={100}
      startOffset={50}
      reversed={false}
      text="react-curved-text"
      textProps={{ style: { fontSize: 24 } }}
    />
  );
};

export default CurvedText;

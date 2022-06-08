const Numbers = ({ handleClick }) => {
  const buttons = [
    "9",
    "8",
    "7",
    "6",
    "5",
    "4",
    "3",
    "2",
    "1",
    "0",
    "c",
    ".",
    "0",
    "=",
  ];
  return (
    <div>
      {buttons.map((buttons) => (
        <button onClick={handleClick} key={buttons}>
          {buttons}
        </button>
      ))}
    </div>
  );
};

export default Numbers;

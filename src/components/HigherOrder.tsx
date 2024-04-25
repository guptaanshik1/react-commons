const HigherOrder = (title: string) => {
  return function HOC() {
    return (
      <div>
        <h2>{title}</h2>
      </div>
    );
  };
};

export default HigherOrder;

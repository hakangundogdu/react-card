const Stats = (props) => {
  return (
    <div className="card-text-stats">
      <div className="stat-value text-accent">{props.value}</div>
      <div className="stat-text">{props.text}</div>
    </div>
  );
};

export default Stats;

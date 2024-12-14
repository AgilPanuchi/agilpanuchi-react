import MarqueComponent from "./MarquenComponent";

const TechnicalSkills = () => {
  const marquee = "";
  return (
    <div>
      <div className="text-center pt-3">
        <h1 className="textUngu pb-1">Technical Skills</h1>
        <hr className="w-50 mx-auto" />
      </div>
      <div>
        <MarqueComponent marquee={marquee} imageIndices={[0, 1, 2, 3, 4]} />
      </div>
      <div>
        <MarqueComponent marquee={marquee} imageIndices={[5, 6, 7, 8, 9, 10]} />
      </div>
    </div>
  );
};

export default TechnicalSkills;

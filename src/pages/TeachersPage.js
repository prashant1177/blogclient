import People from "../components/People";

export default function TeachersPage(params) {
  return (
    <>
      <h1 className="head pageTitle">PEOPLE I ADMIRE</h1>

      <div className="peopleContainer">
        <div className="people">
          <div
            className="peopleCard"
            style={{
              backgroundImage:
                "url(https://mrwallpaper.com/images/hd/shivaji-maharaj-painting-8q6y0q8e8klgi940.jpg)",
            }}
          >
            {" "}
            <p>
              Even if there were a sword in the hands of everyone, it is
              willpower that establishes a government
            </p>
          </div>
          <div
            className="peopleCard"
            style={{
              backgroundImage:
                "url(https://i.pinimg.com/736x/26/5f/8b/265f8ba91f3d4cb971296ab0146c9b27.jpg)",
            }}
          >
            <p>Be — don't try to become</p>
          </div>
          <div
            className="peopleCard"
            style={{
              backgroundImage:
                "url(https://cdn.prod.website-files.com/6502e0f2b914387d2638d94f/65116d11c370dd7b593e5637_DSC00011%201.png)",
            }}
          >
            {" "}
            <p>
              Before dragging yourself down or someone else down, always remind
              yourself they haven’t lived a day in your shoes, and you haven’t
              in theirs.
            </p>
          </div>
          <div
            className="peopleCard"
            style={{
              backgroundImage:
                "url(https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Jordan_Peterson_by_Gage_Skidmore.jpg/1200px-Jordan_Peterson_by_Gage_Skidmore.jpg)",
            }}
          >
            <p>When you have something to say, silence is a lie.</p>
          </div>
          <div
            className="peopleCard"
            style={{
              backgroundImage:
                "url(https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Zakir_khan_2.jpg/800px-Zakir_khan_2.jpg)",
            }}
          >
            {" "}
            <p>
              Meri Zameen tumse gahari rahi hai, Waqt aane do, aasman bhi tumse
              uncha rahega!
            </p>
          </div>
        </div>{" "}
        <div className="quoteContainer">
          <p>
            Those you cannot meet are neither to love nor hate; they are simply
            lessons to learn.{" "}
          </p>
          <p>― Written By Me</p>
        </div>
      </div>
    </>
  );
}

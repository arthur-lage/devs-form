import React from "react";
import "../styles/Home.css";

function Home() {
  const handleForm = () => {};

  return (
    <div className="home">
      <div>
        <h1 className="title">Dev Registration</h1>
        <p className="subtitle">Fill the input fields with your information</p>
      </div>

      <main>
        <form onSubmit={handleForm}>
          <fieldset className="fieldset-name-surname">
            <section className="name">
              <label className="description" htmlFor="name">
                Name
              </label>
              <input required type="text" name="name" id="name" />
            </section>
            <section className="surname">
              <label className="description" htmlFor="surname">
                Surname
              </label>
              <input required type="text" name="surname" id="surname" />
            </section>
          </fieldset>

          <section className="email">
            <label className="description" htmlFor="email">
              Email
            </label>
            <input required type="text" name="email" id="email" />
          </section>

          <fieldset className="developsFor">
            <section>
              <label className="description">
                Are you a Frontend, Backend or a Fullstack developer?
              </label>
              <div>
                <div>
                  <input
                    type="radio"
                    defaultChecked
                    name="developsFor"
                    id="frontend"
                    value="frontend"
                  />
                  <label htmlFor="frontend">Frontend</label>
                </div>

                <div>
                  {" "}
                  <input
                    type="radio"
                    name="developsFor"
                    id="backend"
                    value="backend"
                  />
                  <label htmlFor="backend">Backend</label>
                </div>

                <div>
                  <input
                    type="radio"
                    name="developsFor"
                    id="fullstack"
                    value="fullstack"
                  />
                  <label htmlFor="fullstack">Fullstack</label>
                </div>
              </div>
            </section>
          </fieldset>

          <section className="seniorityLevel">
            <label className="description">What is your seniority level?</label>
            <select required name="seniority" id="seniority">
              <option value="junior">Junior</option>
              <option value="middle">Middle</option>
              <option value="senior">Senior</option>
            </select>
          </section>

          <fieldset>
            <section className="technologies">
              <label className="description">
                Select the technologies that you use:{" "}
              </label>

              <div>
                <div>
                  <input type="checkbox" name="html" id="html" />
                  <label htmlFor="html">HTML</label>
                </div>

                <div>
                  <input type="checkbox" name="css" id="css" />
                  <label htmlFor="css">CSS</label>
                </div>

                <div>
                  <input type="checkbox" name="javascript" id="javascript" />
                  <label htmlFor="javascript">JavaScript</label>
                </div>

                <div>
                  <input type="checkbox" name="java" id="java" />
                  <label htmlFor="java">Java</label>
                </div>

                <div>
                  <input type="checkbox" name="csharp" id="csharp" />
                  <label htmlFor="csharp">C#</label>
                </div>

                <div>
                  <input type="checkbox" name="cplusplus" id="cplusplus" />
                  <label htmlFor="cplusplus">C++</label>
                </div>

                <div>
                  <input type="checkbox" name="go" id="go" />
                  <label htmlFor="go">Go</label>
                </div>

                <div>
                  <input type="checkbox" name="python" id="python" />
                  <label htmlFor="python">Python</label>
                </div>

                <div>
                  <input type="checkbox" name="nodejs" id="nodejs" />
                  <label htmlFor="nodejs">NodeJS</label>
                </div>

                <div>
                  <input type="checkbox" name="php" id="php" />
                  <label htmlFor="php">PHP</label>
                </div>

                <div>
                  <input type="checkbox" name="ruby" id="ruby" />
                  <label htmlFor="ruby">Ruby</label>
                </div>
              </div>
            </section>
          </fieldset>

          <section className="about">
            <label className="description" htmlFor="about">
              Tell us a little about your experience:{" "}
            </label>
            <textarea required name="about" id="about"></textarea>
          </section>

          <button type="submit">Submit</button>
        </form>
      </main>
    </div>
  );
}

export default Home;

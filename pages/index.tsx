import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

//images
import Chef from "../images/Chef.png";
import Detective from "../images/Detective.png";
import Writer from "../images/Writer.png";
import Designing from "../images/Designing.png";
import Programmer from "../images/Programmer.png";
import Tester from "../images/QA_Tester.png";
import Astronaut from "../images/Astronaut.png";

//icons
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

//components
import AnimatedImage from "../components/AnimatedImage";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Taranberg</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <section className={styles.section__1}>
          <h1 className={styles.title}>
            Creating Educational Content <br></br> With a Secret Sauce.
          </h1>
          <p className={styles.description}>
            Gain the trust of your customers and get them to buy your products.
          </p>
          <button className={styles.contact__us__button}>Contact Us</button>
          <Image className={styles.chef__image} src={Chef} alt="Chef" />
        </section>

        <section className={styles.section__2}>
          <h2 className={styles.title__sub}>How Taranberg Works?</h2>
          <br></br>
          <div className={styles.section__2__content}>
            <div className={styles.description__container}>
              <div className={styles.description__sub__container}>
                <h3 className={styles.title__sub__2}>Thorough Research</h3>
                <div>
                  <div className={styles.check__section}>
                    <CheckCircleIcon className={styles.check__icon} />
                    <p>
                      We do product testing, so consumers know what products
                      will do for them and which ones are the best.
                    </p>
                  </div>
                  <div className={styles.check__section}>
                    <CheckCircleIcon className={styles.check__icon} />
                    <p>
                      During user interviews, we ask questions about a topic of
                      interest (e.g., use of a system, behaviors, and habits) to
                      learn more.
                    </p>
                  </div>
                  <div className={styles.check__section}>
                    <CheckCircleIcon className={styles.check__icon} />
                    <p>
                      Keyword research gives you insight into your target
                      market's search on Google. Knowing these actual search
                      terms can help you with content strategy.
                    </p>
                  </div>
                </div>
                <button className={styles.partner__with__us}>
                  <b className={styles.partner__text}>Partner with Us</b>
                </button>
              </div>
            </div>
            <div className={styles.image__container}>
              <AnimatedImage direction="right">
                <Image
                  className={styles.detective__image}
                  src={Detective}
                  alt="Detective"
                />
              </AnimatedImage>
            </div>
          </div>
        </section>

        <section className={styles.section__3}>
          <br></br>
          <div className={styles.section__3__content}>
            <div className={styles.image__container}>
              <AnimatedImage direction="left">
                <Image
                  className={styles.writer__image}
                  src={Writer}
                  alt="Writer"
                />
              </AnimatedImage>
            </div>
            <div className={styles.description__container}>
              <div className={styles.description__sub__container}>
                <h3 className={styles.title__sub__2}>Exceptional Text</h3>
                <div>
                  <div className={styles.check__section}>
                    <CheckCircleIcon className={styles.check__icon} />
                    <p>
                      Consistent, engaging, and quality content impacts the
                      audience more than anything else. It lets people know what
                      your business does and how you can help them.
                    </p>
                  </div>
                  <div className={styles.check__section}>
                    <CheckCircleIcon className={styles.check__icon} />
                    <p>
                      Writing isn't complete without editing and proofreading.
                      They simplify the writing style's effectiveness and help
                      clarify the ideas.
                    </p>
                  </div>
                  <div className={styles.check__section}>
                    <CheckCircleIcon className={styles.check__icon} />
                    <p>
                      SEO editing improves the readability, clarity, and
                      conciseness of web copy. Unlike traditional copyediting,
                      it accounts for search engines, too.
                    </p>
                  </div>
                </div>
                <button className={styles.partner__with__us}>
                  <b className={styles.partner__text}>Partner with Us</b>
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.section__4}>
          <br></br>
          <div className={styles.section__4__content}>
            <div className={styles.description__container}>
              <div className={styles.description__sub__container}>
                <h3 className={styles.title__sub__2}>Stunning Design</h3>
                <div>
                  <div className={styles.check__section}>
                    <CheckCircleIcon className={styles.check__icon} />
                    <p>
                      Unique and creative designs will help you rank higher in
                      search engines, stand out from the crowd, and boost
                      customer engagement.
                    </p>
                  </div>
                  <div className={styles.check__section}>
                    <CheckCircleIcon className={styles.check__icon} />
                    <p>
                      An intelligent design structure improves the usability or
                      user-friendliness of your content by making it easy for
                      users to find what they are looking for.
                    </p>
                  </div>
                  <div className={styles.check__section}>
                    <CheckCircleIcon className={styles.check__icon} />
                    <p>
                      With illustrations, infographics, screenshots, etc., you
                      can help to make your points clearly by visualizing the
                      information and presenting it in different ways.
                    </p>
                  </div>
                </div>
                <button className={styles.partner__with__us}>
                  <b className={styles.partner__text}>Partner with Us</b>
                </button>
              </div>
            </div>
            <div className={styles.image__container}>
              <AnimatedImage direction="right">
                <Image
                  className={styles.designing__image}
                  src={Designing}
                  alt="Designing"
                />
              </AnimatedImage>
            </div>
          </div>
        </section>

        <section className={styles.section__5}>
          <br></br>
          <div className={styles.section__5__content}>
            <div className={styles.image__container}>
              <AnimatedImage direction="left">
                <Image
                  className={styles.programmer__image}
                  src={Programmer}
                  alt="Programmer"
                />
              </AnimatedImage>
            </div>
            <div className={styles.description__container}>
              <div className={styles.description__sub__container}>
                <h3 className={styles.title__sub__2}>Clean Code</h3>
                <div>
                  <div className={styles.check__section}>
                    <CheckCircleIcon className={styles.check__icon} />
                    <p>
                      We use clear variables and functions. Correctly naming
                      variables and functions makes the code easier to read.
                    </p>
                  </div>
                  <div className={styles.check__section}>
                    <CheckCircleIcon className={styles.check__icon} />
                    <p>
                      Our functions do one thing only. Functions that do one
                      thing are easier to understand, read, and maintain.
                    </p>
                  </div>
                  <div className={styles.check__section}>
                    <CheckCircleIcon className={styles.check__icon} />
                    <p>
                      The documentation we write for our code helps future
                      developers understand what your code does.
                    </p>
                  </div>
                </div>
                <button className={styles.partner__with__us}>
                  <b className={styles.partner__text}>Partner with Us</b>
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.section__6}>
          <br></br>
          <div className={styles.section__6__content}>
            <div className={styles.description__container}>
              <div className={styles.description__sub__container}>
                <h3 className={styles.title__sub__2}>QA Testing</h3>
                <div>
                  <div className={styles.check__section}>
                    <CheckCircleIcon className={styles.check__icon} />
                    <p>
                      Thanks to our checklist, we have a clear review plan for
                      our reviewers. To make sure we catch everything, we use a
                      spreadsheet.
                    </p>
                  </div>
                  <div className={styles.check__section}>
                    <CheckCircleIcon className={styles.check__icon} />
                    <p>
                      Check with you if we need to make any minor changes, like
                      design, content, internal links, etc.
                    </p>
                  </div>
                  <div className={styles.check__section}>
                    <CheckCircleIcon className={styles.check__icon} />
                    <p>
                      Once the last review is complete, we make sure you approve
                      the file before it goes live.
                    </p>
                  </div>
                </div>
                <button className={styles.partner__with__us}>
                  <b className={styles.partner__text}>Partner with Us</b>
                </button>
              </div>
            </div>
            <div className={styles.image__container}>
              <AnimatedImage direction="right">
                <Image
                  className={styles.image__container}
                  src={Tester}
                  alt="QA Tester"
                />
              </AnimatedImage>
            </div>
          </div>
        </section>
        <section className={styles.section__7}>
          <h1 className={styles.title}>Perfect Launching!</h1>
          <p className={styles.description}>
            Time to make money from your content.
          </p>

          <Image
            className={styles.image__container}
            src={Astronaut}
            alt="Astronaut"
          />
        </section>
        <section className={styles.section__8}>
          <h1 className={styles.title__white}>Want to Learn More?</h1>
          <p className={styles.description__white}>
            Don't be a stranger. Let's talk.
          </p>
          <button className={styles.contact__us__button}>Contact Us</button>
        </section>
      </main>
    </div>
  );
};

export default Home;

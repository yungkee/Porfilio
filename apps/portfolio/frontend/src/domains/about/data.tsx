const getGithubStatsUrl = (url: string) =>
  `${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}${url}&theme=transparent&hide_border=true&title_color=00d3bb&text_color=FFFFFF&icon_color=00d3bb&text_bold=false&hide=html,javascript`;

const skills = [
  "UE5",
  "react",
  "nextjs",
  "nodejs"
];

export const about = {
  name: "Igor Levdansky",
  title: "Architect of Enchantment",
  description: (
    <div>
      I am Igor Levdansky, a digital architect with{" "}
      <span className="text-accent">5 years</span> of mastery in software and game development. 
      My journey through the technological realms is
      anchored in the powerful spells of{" "}
      <span className="text-accent">JavaScript and TypeScript</span>, which I
      wield with precision to craft immersive digital experiences. As a master
      enchanter at <span className="text-accent">Data Grand</span>, I command a
      fellowship of <span className="text-accent">10 frontend wizards</span>,
      guiding their magical journeys while continuously expanding my own
      grimoire of knowledge. My <span className="text-accent">React</span>{" "}
      incantations have been refined through countless projects, transforming
      complex requirements into elegant user interfaces that dance with life and
      responsiveness. Beyond the fundamental magic of{" "}
      <span className="text-accent">HTML and CSS</span>, I&apos;ve delved into
      the deeper mysteries of performance optimization, having solved over{" "}
      <span className="text-accent">250 challenges</span> in the renowned{" "}
      <span className="text-accent">LeetCode</span> trials. My code follows the
      ancient principles of <span className="text-accent">SOLID</span>, creating
      clean, maintainable spells that stand the test of time. I&apos;ve
      constructed powerful artifacts like{" "}
      <span className="text-accent">
        low-code platforms and knowledge portals
      </span>
      , using mystical tools such as{" "}
      <span className="text-accent">Mobx, Rx.js, and Ant Design</span> to bind
      data to interface. My ventures extend into the realms of{" "}
      <span className="text-accent">Web3</span>, where I&apos;ve crafted smart
      contracts that interact with the{" "}
      <span className="text-accent">ethereum blockchain</span>, and{" "}
      <span className="text-accent">AI integration</span>, deploying{" "}
      <span className="text-accent">open-source models</span> to enhance my
      team&apos;s creative powers. As I continue my quest through the
      ever-evolving landscape of web development, I carry with me not just
      technical expertise but a vision for crafting digital experiences that
      connect users across the vast expanse of the internet. Join me as I
      continue to innovate, optimize, and transform the digital realm one
      elegant line of code at a time.
    </div>
  ),

  clients: "100+",
  experience: "5+",

  referenceImages: [
    {
      alt: "top langs",
      src: getGithubStatsUrl("/api/top-langs?username=wangshouren7"),
      sizeClassName: "lg:col-span-4 !p-0",
    },
    {
      alt: "github status",
      src: getGithubStatsUrl("/api?username=wangshouren7"),
      sizeClassName: "lg:col-span-8 !p-0",
    },
    {
      alt: "skills",
      src: `https://skillicons.dev/icons?i=${skills.join(",")}`,
      sizeClassName: "",
    },
    {
      alt: "Streak",
      src: `${process.env.NEXT_PUBLIC_GITHUB_STREAK_STATS_URL}?user=wangshouren7&theme=dark&hide_border=true&type=svg&background=EB545400&ring=00d3bb&currStreakLabel=00d3bb`,
      sizeClassName: "lg:col-span-6 !p-0",
    },
    {
      alt: "github repo",
      src: getGithubStatsUrl("/api/pin/?username=wangshouren7&repo=pfl-wsr"),
      sizeClassName: "lg:col-span-6 !p-0",
      href: "https://github.com/wangshouren7/portfolio",
    },
  ],
};

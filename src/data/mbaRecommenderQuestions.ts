// MBA recommender requirements, verified against each school's own admissions pages.
// Retrieved 5 August 2026. Regenerated from schools_verified.py; do not hand-edit.

export const RETRIEVED = "5 August 2026";

export type Question = { text: string; limit: string | null };
export type School = {
  name: string;
  short: string;
  url: string;
  letters: string;
  lor: string;
  questions: Question[];
  grid: string | null;
  notes: string[];
  gaps: string[];
  source: string;
  cycle: string;
};

export const SCHOOLS: School[] = [
  {
    name: "Harvard Business School",
    short: "Harvard",
    url: "hbs.edu/mba/admissions/frequently-asked-questions",
    letters: "Two",
    lor: "Does not use the GMAC Common Letter of Recommendation. Harvard publishes its own prompts.",
    questions: [
      {
        text: "Please provide specific examples of how the applicant’s performance, potential, background, or personal qualities compare to those of other well-qualified individuals in similar roles.",
        limit: "300 words",
      },
      {
        text: "Please describe the most important piece of constructive feedback you have given the applicant. Please detail the circumstances and the applicant’s response.",
        limit: "250 words",
      },
    ],
    grid: "Recommenders complete what Harvard calls a personal qualities and skills grid. Its contents, rating labels, and competency list are not published.",
    notes: [
      "Recommendations are completed online. Recommenders receive a link by email.",
    ],
    gaps: [
      "Harvard does not publish a short working-relationship question, and does not publish an optional closing question. Do not assume it has them because other schools do.",
    ],
    source:
      "hbs.edu MBA Admissions FAQ, and the HBS MBA Application Guide 2026-2027",
    cycle: "2026-2027",
  },
  {
    name: "Stanford Graduate School of Business",
    short: "Stanford",
    url: "gsb.stanford.edu/programs/mba/admission/application/letters-recommendation/information",
    letters:
      "Two, one from your current direct supervisor and one from someone else who has supervised you. Family members and your own direct reports are not permitted.",
    lor: "Publishes the Common Letter of Recommendation questions without naming GMAC.",
    questions: [
      {
        text: "How does the applicant’s performance compare to that of other well-qualified individuals in similar roles? Please provide specific examples.",
        limit: "Up to 500 words",
      },
      {
        text: "Describe the most important piece of constructive feedback you have given the applicant. Please detail the circumstances and the applicant’s response.",
        limit: "Up to 500 words",
      },
      {
        text: "Is there anything else we should know? Please be concise. (Optional)",
        limit: null,
      },
    ],
    grid: "Recommenders complete a form assessing twelve leadership competencies. Stanford names all twelve, listed alphabetically, but does not publish the behavioral level text or the category grouping.",
    notes: [
      "The letter should be double-spaced and two to four pages.",
      "It must be submitted in English. You may not translate it yourself.",
      "Your recommender may not submit from your personal or work computer.",
    ],
    gaps: [
      "Stanford does not publish a short working-relationship question. Its recommender page lists three questions only.",
    ],
    source: "gsb.stanford.edu, Information for Recommenders",
    cycle: "page carries no cycle label",
  },
  {
    name: "The Wharton School, University of Pennsylvania",
    short: "Wharton",
    url: "mba.wharton.upenn.edu/application-guide/",
    letters:
      "One. Carey JD/MBA applicants submit two through the LSAC service.",
    lor: "States plainly: “We use the Common Letter of Recommendation from GMAC.” Wharton moved to the Common Letter and reduced its requirement from two letters to one for the Class of 2028.",
    questions: [],
    grid: "Wharton refers to an accompanying recommender assessment allowing recommenders to evaluate strengths across a broad range of competencies. The contents are not published.",
    notes: [
      "Wharton publishes an address specifically for recommender questions.",
    ],
    gaps: [
      "Wharton does not publish its own question wording or word limits. The questions come from the GMAC form.",
      "Older sources describe a Wharton forced-choice appraisal of descriptor groups. Wharton’s current guide instead identifies the Common Letter. That the older appraisal has been replaced is an inference from the current guidance, not something Wharton announced.",
    ],
    source: "mba.wharton.upenn.edu Application Guide",
    cycle: "2026-2027",
  },
  {
    name: "University of Chicago Booth School of Business",
    short: "Booth",
    url: "chicagobooth.edu/mba/full-time/admissions/how-to-apply",
    letters: "One, from a supervisor. Current supervisor preferred.",
    lor: "Does not name GMAC, though its two published questions closely track the Common Letter wording.",
    questions: [
      {
        text: "How do the applicant’s performance, potential, background, or personal qualities compare with those of other well-qualified individuals in similar roles? Please provide specific examples.",
        limit: null,
      },
      {
        text: "Please describe the most important piece of constructive feedback you have given the applicant. Please detail the circumstances and the applicant’s response.",
        limit: null,
      },
    ],
    grid: "Recommenders complete a skills assessment for each applicant. Its contents are not published.",
    notes: [
      "If you work in a family business, Booth asks for a client or outside party instead.",
    ],
    gaps: [
      "Booth publishes no word or character limits for these questions, no working-relationship question, and no optional closing question. If the live form displays additional instructions, those instructions control.",
    ],
    source: "chicagobooth.edu, How to Apply",
    cycle: "2026-2027 deadlines on page",
  },
  {
    name: "Kellogg School of Management, Northwestern University",
    short: "Kellogg",
    url: "kellogg.northwestern.edu/admissions/ft-admissions/ft-how-to-apply/",
    letters:
      "Two. One from a current supervisor or manager, one from someone who can evaluate your professional performance and leadership potential.",
    lor: "Does not use the Common Letter of Recommendation. Its first question exists nowhere else in this set.",
    questions: [
      {
        text: "Share an example of how the candidate has engaged with colleagues, clients, or stakeholders who held perspectives different from their own. How did they navigate the situation, and what does this demonstrate about their ability to lead or collaborate in complex environments?",
        limit: "300 words",
      },
      {
        text: "How does the candidate’s performance compare to that of other well-qualified individuals in similar roles? Please provide specific examples.",
        limit: "300 words",
      },
      {
        text: "Describe the most important piece of constructive feedback you have given the candidate. Please detail the circumstances and the applicant’s response.",
        limit: "250 words",
      },
    ],
    grid: null,
    notes: [
      "Kellogg says additional letters of support are neither required nor encouraged.",
      "Kellogg writes “candidate” where most schools write “applicant”.",
    ],
    gaps: [
      "Kellogg publishes no working-relationship question, no optional closing question, and no competency grid.",
    ],
    source: "kellogg.northwestern.edu, How to Apply",
    cycle: "2026-2027 deadlines on page",
  },
  {
    name: "Columbia Business School",
    short: "Columbia",
    url: "academics.business.columbia.edu/admissions/mba/application-requirements",
    letters: "One. Reapplicants submit one new recommendation.",
    lor: "Acknowledges that it and several peer schools use similar or identical questions, without naming GMAC.",
    questions: [
      {
        text: "How do the candidate’s performance, potential, background, or personal qualities compare to those of other well-qualified individuals in similar roles? Please provide specific examples.",
        limit: null,
      },
      {
        text: "Please describe the most important piece of constructive feedback you have given the applicant. Please detail the circumstances and the applicant’s response.",
        limit: null,
      },
    ],
    grid: null,
    notes: [
      "Columbia states a recommended limit of 1,000 words. This covers the recommendation as a whole, not each question, and it is a recommendation rather than a hard cap.",
      "If you have worked full time for six months or more, the recommendation should ideally come from your current supervisor. If that is not possible, you must explain why.",
      "Recommenders must be contacted at an institutional or professional address. Columbia states that references submitted from personal or anonymous email accounts are subject to review.",
    ],
    gaps: [
      "Columbia publishes no working-relationship question, no optional closing question, and no competency grid.",
    ],
    source: "business.columbia.edu, Application Requirements",
    cycle: "page carries no cycle label",
  },
  {
    name: "Haas School of Business, University of California, Berkeley",
    short: "Haas",
    url: "mba.haas.berkeley.edu/admissions/recommendation-letters",
    letters:
      "Two, at least one preferably from a current employer. Haas advises against co-workers, people you have supervised, relatives, and personal friends, and discourages academic references.",
    lor: "States that it accepts the GMAC Common Letter of Recommendation, with the questions embedded in the Berkeley Haas application.",
    questions: [
      {
        text: "Please provide a brief description of your interaction with the applicant and, if applicable, the applicant’s role in your organization.",
        limit: "Up to 50 words",
      },
      {
        text: "How does the performance of the applicant compare to that of other well-qualified individuals in similar roles? (E.g. what are the applicant’s principal strengths?)",
        limit: "Up to 500 words",
      },
      {
        text: "Describe the most important piece of constructive feedback you have given the applicant. Please detail the circumstances and the applicant’s response.",
        limit: "Up to 500 words",
      },
      {
        text: "Is there anything else we should know? (Optional)",
        limit: null,
      },
    ],
    grid: "Haas publishes the full twelve-competency grid: five categories, twelve competencies, and five numbered behavioral levels plus “No basis for judgment”. It is the only school in this set that publishes the complete level text on its own site.",
    notes: [
      "The Haas form carries a certification checkbox in which the recommender confirms the recommendation was written entirely by them.",
    ],
    gaps: [],
    source:
      "mba.haas.berkeley.edu recommendation letters page and recommendation form",
    cycle: "form carries no cycle label",
  },
  {
    name: "Tuck School of Business, Dartmouth College",
    short: "Tuck",
    url: "tuck.dartmouth.edu/admissions/applying-to-tuck/application-instructions",
    letters:
      "Two letters of reference. Reapplicants from the most recent cycle submit one new letter from a different reference. Tuck discourages more than two.",
    lor: "Publishes the Common Letter of Recommendation questions with word counts. Tuck is the only school in this set that publishes the complete question set at the full Common Letter limits.",
    questions: [
      {
        text: "Please provide a brief description of your interaction with the applicant and, if applicable, the applicant’s role in your organization.",
        limit: "50 words",
      },
      {
        text: "How does the applicant’s performance compare to that of other well-qualified individuals in similar roles? Provide specific examples.",
        limit: "500 words",
      },
      {
        text: "Describe the most important piece of constructive feedback you have given the applicant. Please detail the circumstances and the applicant’s response.",
        limit: "500 words",
      },
      {
        text: "Is there anything else we should know? (Optional)",
        limit: null,
      },
    ],
    grid: "Tuck states that it does not ask references to complete the Common Letter’s leadership assessment grid.",
    notes: [
      "Tuck asks references to speak to its four admissions criteria: smart, accomplished, aware, and encouraging.",
      "Your reference must be the sole author. Drafting, writing, translating, or submitting your own letter, even if your reference asks you to, violates Tuck’s admissions policies and its Academic Honor Principle.",
      "Letters not in English must be translated by an outside translation service.",
    ],
    gaps: [],
    source: "tuck.dartmouth.edu application instructions and admissions blog",
    cycle: "2026-2027 deadlines on page",
  },
  {
    name: "Yale School of Management",
    short: "Yale",
    url: "som.yale.edu/programs/mba/admissions/application-information/application-guide",
    letters:
      "Two professional recommendations. Silver Scholars applicants submit one professional and one academic.",
    lor: "Yale does not publicly confirm that it uses the Common Letter of Recommendation, and does not disclose its questions.",
    questions: [],
    grid: null,
    notes: [
      "Yale states that you can have no role in the drafting or submission of your recommendations, and instructs applicants not to send recommenders essays or other written materials because they may incorporate them.",
      "Yale’s guidance on writing in a language other than English differs between two of its own pages. Confirm the current rule with Yale directly if it applies to you.",
    ],
    gaps: [
      "Yale does not publicly disclose its recommender questions, its word limits, or whether it uses a competency grid. The form sent to your recommender is the authoritative source for what Yale currently asks. Anything you read elsewhere claiming to list Yale’s prompts is secondhand.",
    ],
    source: "som.yale.edu Application Guide and Application Tips",
    cycle: "2026-2027",
  },
  {
    name: "NYU Stern School of Business, Full-time MBA",
    short: "Stern",
    url: "stern.nyu.edu/programs-admissions/full-time-mba/admissions/eq-endorsement",
    letters:
      "Stern calls these EQ Endorsements. One is required, a second is optional. The required one should come from your current supervisor.",
    lor: "Publishes a question set close to the Common Letter, plus one question of its own. Page reverified directly on 5 August 2026.",
    questions: [
      {
        text: "Please provide a brief description of your interaction with the applicant and, if applicable, the applicant’s role in your organization.",
        limit: null,
      },
      {
        text: "How does the applicant’s performance compare to that of other well-qualified individuals in similar roles (if applicable)? Please provide specific examples. (E.g. what are the applicant’s principal strengths?)",
        limit: null,
      },
      {
        text: "Describe the most important piece of constructive feedback you have given the applicant. Please detail the circumstances and the applicant’s response.",
        limit: null,
      },
      {
        text: "IQ+EQ is a core value of NYU Stern, and we seek exceptional individuals who possess both intellectual and interpersonal strengths. Please provide one specific and compelling example to demonstrate the applicant’s emotional intelligence.",
        limit: null,
      },
      {
        text: "Is there anything else we should know? (Optional)",
        limit: null,
      },
    ],
    grid: null,
    notes: [
      "Immediate family members should not write one. More than two is allowed but not encouraged.",
      "Stern states that endorsers are asked to rate the applicant on several abilities and qualities, without naming them on the full-time page.",
    ],
    gaps: [
      "Stern publishes no word limits for these questions. Its pages carry no cycle label, so confirm before relying on them for a specific year.",
      "Stern’s full-time pages describe the assessment only in general terms. A ten-item rating list appears on the separate part-time Manhattan program page and should not be assumed to apply to the full-time MBA.",
    ],
    source: "stern.nyu.edu EQ Endorsement page",
    cycle: "page carries no cycle label",
  },
  {
    name: "The Fuqua School of Business, Duke University",
    short: "Fuqua",
    url: "fuqua.duke.edu/programs/daytime-mba/application-instructions",
    letters:
      "One. Reapplicants may reuse the prior year’s letter or submit a new one.",
    lor: "States that it adopted the GMAC Common Letter of Recommendation, and publishes all four questions.",
    questions: [
      {
        text: "Please provide a brief description of your interaction with the applicant and, if applicable, the applicant’s role in your organization.",
        limit: null,
      },
      {
        text: "How does the performance of the applicant compare to that of other well-qualified individuals in similar roles?",
        limit: null,
      },
      {
        text: "Describe the most important piece of constructive feedback you have given the applicant. Please detail the circumstances and the applicant’s response.",
        limit: null,
      },
      {
        text: "Is there anything else we should know? (Optional)",
        limit: null,
      },
    ],
    grid: null,
    notes: [
      "Only the online recommendation form is accepted. Submissions by email or mail are not.",
      "Recommendations from relatives and friends are strongly discouraged, and academic recommendations are treated as less valuable than professional ones.",
    ],
    gaps: [
      "Fuqua publishes no word limits for the recommendation questions, and publishes no competency grid on its own pages.",
    ],
    source: "fuqua.duke.edu Daytime MBA application instructions",
    cycle: "2026-2027 deadlines on page",
  },
  {
    name: "Darden School of Business, University of Virginia",
    short: "Darden",
    url: "darden.virginia.edu/mba/admissions/apply/guidelines",
    letters: "One. A second is allowed if it offers genuinely new insight.",
    lor: "Publishes three questions aligned with the Common Letter of Recommendation, without an optional closing question.",
    questions: [
      {
        text: "Please provide a brief description of your interaction with the applicant and, if applicable, the applicant’s role in your organization.",
        limit: null,
      },
      {
        text: "How does the performance of the applicant compare to that of other well-qualified individuals in similar roles?",
        limit: null,
      },
      {
        text: "Describe the most important piece of constructive feedback you have given the applicant. Please detail the circumstances and the applicant’s response.",
        limit: null,
      },
    ],
    grid: "Darden states that recommenders complete a ratings grid evaluating you across a set of competencies. It does not name the competencies, define them, or publish level text.",
    notes: [
      "Darden prefers a current or recent supervisor and discourages academic recommendations.",
    ],
    gaps: [
      "Darden publishes no word limits, and publishes no optional closing question. Its grid contents are not published anywhere on its own site.",
    ],
    source:
      "darden.virginia.edu MBA application guidelines and admissions blog",
    cycle: "2026-2027 deadlines on page",
  },
];

export type Competency = { name: string; definition: string; levels: string[] };
export const COMPETENCY_GRID: {
  category: string;
  competencies: Competency[];
}[] = [
  {
    category: "ACHIEVEMENT",
    competencies: [
      {
        name: "Initiative",
        definition: "Acts ahead of need and anticipates problems.",
        levels: [
          "Reluctant to take on new tasks, waits to be told what to do, defers to others.",
          "Willing to step in and take charge when required to do so.",
          "Takes charge spontaneously when a problem needs attention.",
          "Volunteers for new work challenges, proactively puts in extra effort to accomplish critical or difficult tasks.",
          "Proactively seeks high-impact projects, steps up to challenges even when things are not going well.",
        ],
      },
      {
        name: "Results Orientation",
        definition:
          "Focuses on and drives toward delivering on goals, objectives, and performance improvement.",
        levels: [
          "Focuses on fulfilling activities at hand, unsure how work relates to goals.",
          "Takes actions to overcome obstacles to achieve goals.",
          "Independently acts to exceed goals and plans for contingencies.",
          "Documents activities and outcomes to learn from the past, introduces incremental improvements to raise the effectiveness of the team.",
          "Invents new approaches with measurably better results, works to deliver best-in-class performance improvements.",
        ],
      },
    ],
  },
  {
    category: "INFLUENCE",
    competencies: [
      {
        name: "Communication, Professional Impression and Poise",
        definition:
          "Delivers messages and ideas in a way that engages an audience and achieves buy-in, uses listening and other attending behaviors to reach shared understanding, and remains calm and measured in times of crisis or conflict.",
        levels: [
          "Struggles to get the point across, neglects to understand the audience’s input or perspective, lacks confidence and gets flustered under pressure.",
          "Works to get the point across, acknowledges feedback, reframes statements when necessary to make them clearer, speaks politely, remains composed in known circumstances.",
          "Presents views clearly and logically structures content for a broad audience, listens and responds to feedback, prepares in advance to appear confident, leaves a positive and professional impression, responds confidently in unfamiliar situations.",
          "Uses tailored language that appeals to specific groups, restates what others have said to check for understanding, comes across as confident, responds rapidly and strongly to crisis, is looked to for advice and guidance.",
          "Structures content for senior-level meetings, keeps composure when challenged, solicits opinions and concerns and discusses them openly, adjusts communication, remains cool in strong conflict or crisis, channels emotion into positive action.",
        ],
      },
      {
        name: "Influence and Collaboration",
        definition:
          "Engages and works with people over whom they have no direct control.",
        levels: [
          "Does not seek the input and perspective of others.",
          "Accepts input from others and engages them in problem solving.",
          "Seeks first to understand the perspectives of others, takes actions to gain their support for ideas and initiatives.",
          "Uses tailored approaches to connect with others, influence, and achieve results.",
          "Uses tailored influence approaches to create and leverage a network of strategically chosen individuals to improve collective outcomes.",
        ],
      },
    ],
  },
  {
    category: "PEOPLE",
    competencies: [
      {
        name: "Respect for Others",
        definition: "Acknowledges the value of others’ views and actions.",
        levels: [
          "Unwilling to acknowledge others’ points of view.",
          "Open to considering others’ views when confronted or offered.",
          "Invites input from others because of expressed respect for them and their views.",
          "Praises people publicly for their good actions, ensures that others’ opinions are heard before their own.",
          "Uses empathy and personal experience to resolve conflicts and foster mutual respect, reinforces respect with public praise when individuals solicit and use input from others.",
        ],
      },
      {
        name: "Team Leadership",
        definition:
          "Manages and empowers a team of direct reports or peers on project-based teams, including virtual teams.",
        levels: [
          "Struggles to delegate effectively, does not organize activities or provide appropriate information to complete tasks.",
          "Assigns tasks and tells people what to do, checks when they are done.",
          "Solicits ideas and perspectives from the team, structures activities, holds members accountable.",
          "Actively engages the team to develop plans and resolve issues through collaboration, shows the impact of individual and team contributions.",
          "Recruits others into duties or roles based on insight into individual abilities, rewards those who exceed expectations, provides strong organizational support.",
        ],
      },
      {
        name: "Developing Others",
        definition:
          "Helps people develop their performance and ability over time.",
        levels: [
          "Focuses only on their own growth, critical of others’ efforts to develop.",
          "Encourages people to develop, points out mistakes to help people develop and praises them for improvements.",
          "Gives specific positive and negative behavioral feedback to support the development of others.",
          "Provides overarching practical guiding principles and recommendations applicable in multiple situations, directing efforts toward specific areas of development.",
          "Identifies potential in others, inspires others to develop by providing feedback, mentoring and coaching, and identifying new growth opportunities while supporting their effort to change.",
        ],
      },
    ],
  },
  {
    category: "PERSONAL QUALITIES",
    competencies: [
      {
        name: "Trustworthiness and Integrity",
        definition:
          "Acts consistently in line with explicit values, beliefs, or intentions.",
        levels: [
          "Follows the crowd, takes the path of least resistance, gives in under pressure.",
          "Acts consistently with stated intentions, values, or beliefs when it is easy to do so.",
          "Acts spontaneously and consistently with stated intentions, values, or beliefs despite opposition.",
          "Initiates actions based on values or beliefs even though the actions may carry reputational risk, demonstrates the values of the team or organization publicly.",
          "Demonstrates high personal integrity even at personal cost, holds people accountable to team or organizational values.",
        ],
      },
      {
        name: "Adaptability and Resilience",
        definition:
          "Adapts to changing demands and circumstances without difficulty, and maintains calm optimism in the face of challenge, problems, or apparent failure.",
        levels: [
          "Prefers existing ways of doing things, fears failure, becomes anxious under challenging situations.",
          "Adapts to new methods and procedures when required to do so, remains calm in unfamiliar situations until confronted with an obstacle.",
          "Champions adoption of new initiatives and processes, exhibits levelheadedness in most environments including challenging ones, persists until the obstacle is overcome.",
          "Seeks out disruptions as an opportunity for improvement, remains optimistic and forward-looking in difficult situations that may result in failure.",
          "Is energized by projects with high uncertainty but potential for high reward, seeks to be the first into unknown or unfamiliar situations, welcomes learning opportunities created by failure, learns from mistakes, and rebounds quickly from setbacks.",
        ],
      },
      {
        name: "Self-Awareness",
        definition:
          "Aware of and seeks out additional input on their own strengths and weaknesses.",
        levels: [
          "Lacks awareness of how they are perceived, denies or offers excuses when confronted.",
          "Acknowledges fault or a performance problem when confronted with a concrete example or data.",
          "Describes their own key strengths and weaknesses accurately, welcomes feedback and discusses opportunities to change with select individuals.",
          "Actively seeks out feedback to explicitly address desired improvement areas or build on strengths, explores reasons for problems openly, including their own faults.",
          "Seeks out challenging and potentially risky experiences to improve, identifies and engages with resources (people, processes, or content) to maximize strengths or mitigate weaknesses.",
        ],
      },
    ],
  },
  {
    category: "COGNITIVE ABILITIES",
    competencies: [
      {
        name: "Problem Solving",
        definition:
          "Frames problems, analyzes situations, identifies key issues, conducts analysis, and produces an acceptable solution.",
        levels: [
          "Avoids problems, and when faced with them sticks to what worked before or chooses an obvious path.",
          "Offers solutions when the risk is low, focuses on immediate short-term implications instead of the big picture.",
          "Looks beyond the obvious, identifies and focuses on the critical information needed to understand a problem, identifies root causes, and produces reasonable solutions.",
          "Gathers and analyzes key information using complex methods or several layers deep, integrates perspectives from a variety of sources to arrive at unexpected but practical and effective solutions.",
          "Applies logic to break complex problems into manageable parts, solves tough and interconnected problems, and can explain how the pieces connect.",
        ],
      },
      {
        name: "Strategic Orientation",
        definition:
          "Thinks beyond their span of control and into the future to reshape the approach or scope of work.",
        levels: [
          "Focuses on completing work without understanding implications.",
          "Understands immediate issues or implications of the work or analysis.",
          "Develops insights or recommendations within their area of responsibility that have improved near-term business performance.",
          "Develops insights or recommendations within their area of responsibility that have shaped team or organization strategy and will affect long-term business performance.",
          "Develops insights or recommendations beyond their area of responsibility with impact on long-term business strategy and performance.",
        ],
      },
    ],
  },
];

export const COUNTS = {
  compare: 10,
  feedback: 10,
  context: 5,
  optional: 5,
  one_letter: 5,
  two_letters: 6,
};
export const COUNT_LISTS = {
  compare: [
    "Harvard",
    "Stanford",
    "Booth",
    "Kellogg",
    "Columbia",
    "Haas",
    "Tuck",
    "Stern",
    "Fuqua",
    "Darden",
  ],
  feedback: [
    "Harvard",
    "Stanford",
    "Booth",
    "Kellogg",
    "Columbia",
    "Haas",
    "Tuck",
    "Stern",
    "Fuqua",
    "Darden",
  ],
  context: ["Haas", "Tuck", "Stern", "Fuqua", "Darden"],
  optional: ["Stanford", "Haas", "Tuck", "Stern", "Fuqua"],
  one_letter: ["Wharton", "Booth", "Columbia", "Fuqua", "Darden"],
  two_letters: ["Harvard", "Stanford", "Kellogg", "Haas", "Tuck", "Yale"],
};

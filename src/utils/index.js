import {
  DesignExplorationImage,
  DesignRefinementImage,
  EarlyTestingImage,
  HandoffImage,
  MonitoringImage,
  ResearchImage,
  UserJourneyImage,
} from "../assets/svg";

export * from "./framerVariants";

export const designStrategies = [
  {
    step: 1,
    title: "Research & Discovery",
    description:
      "Dive deep into understanding the problem space through comprehensive research. Explore user needs, pain points, and business objectives to lay a strong foundation for the design process.",
    icon: ResearchImage,
    theme: "linear-gradient(90deg, #B98F6D 40%, #EDDCDB 70%)",
  },
  {
    step: 2,
    title: "User Journey Mapping",
    description:
      "Visualize the user's journey to understand their interactions and experiences with the product or service. Identify touchpoints, pain points, and opportunities for improvement to enhance the overall user experience.",
    icon: UserJourneyImage,
    theme: "linear-gradient(90deg, #CC5648 40%, #EDDCDB 70%)",
  },
  {
    step: 3,
    title: "Design  Exploration & Ideation",
    description:
      "Dive deep into understanding the problem space through comprehensive research. Explore user needs, pain points, and business objectives to lay a strong foundation for the design process.",
    icon: DesignExplorationImage,
    theme: "linear-gradient(90deg, #554579 40%, #C8C3D4 70%)",
  },
  {
    step: 4,
    title: "Early Testing & Validation",
    description:
      "Test initial design concepts with users to gather feedback and validate assumptions. Conduct usability testing, concept testing, and gather qualitative insights to ensure that designs meet user needs effectively.",
    icon: EarlyTestingImage,
    theme: "linear-gradient(90deg, #C8B92C 40%, #F7F5E0 70%)",
  },
  {
    step: 5,
    title: "Design Refinement & Iteration",
    description:
      "Iterate on design solutions based on user feedback and insights gathered from testing. Refine prototypes, make improvements, and incorporate user-centered design principles to enhance usability and user satisfaction.",
    icon: DesignRefinementImage,
    theme: "linear-gradient(90deg, #B09C8A 40%, #F0D8D4 70%)",
  },
  {
    step: 6,
    title: "Handoff & Implementation",
    description:
      "Prepare designs for handoff to development teams for implementation. Document design specifications, collaborate with developers, and ensure a smooth transition from design to development to ensure designs are implemented accurately.",
    icon: HandoffImage,
    theme: "linear-gradient(90deg, #9C1E55 40%, #D5C3DB 70%)",
  },
  {
    step: 7,
    title: "Monitoring & Iterative Improvement",
    description:
      "Continuously monitor and gather feedback on the implemented design to inform iterative improvements. Analyze user behavior, gather analytics data, and make adjustments to optimize the user experience over time.",
    icon: MonitoringImage,
    theme: "linear-gradient(90deg, #52036A 40%, #D5C3DB 70%)",
  },
];

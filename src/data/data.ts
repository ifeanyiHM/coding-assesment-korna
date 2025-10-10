export interface MediumFeedItem {
  category?: string;
  author: string;
  title: string;
  excerpt?: string;
  stats: {
    date?: string;
    claps?: string;
    comments?: number;
  };
  image?: string;
  tag?: string;
}

export interface DevToArticle {
  canonical_url?: string;
  collection_id?: number | null;
  comments_count?: number;
  cover_image?: string | null;
  created_at?: string;
  crossposted_at?: string | null;
  description?: string;
  edited_at?: string | null;
  id?: number;
  language?: string;
  last_comment_at?: string;
  organization?: {
    name?: string;
    username?: string;
    slug?: string;
    profile_image?: string;
    profile_image_90?: string;
  };
  path?: string;
  positive_reactions_count?: number;
  public_reactions_count?: number;
  published_at?: string;
  published_timestamp?: string;
  readable_publish_date?: string;
  reading_time_minutes?: number;
  slug?: string;
  social_image?: string;
  subforem_id?: number;
  tag_list?: string[];
  tags?: string;
  title?: string;
  type_of?: string;
  url?: string;
  user?: {
    name?: string;
    username?: string;
    twitter_username?: string | null;
    github_username?: string | null;
    user_id?: number;
    profile_image?: string;
    profile_image_90?: string;
  };
}

export const mediumFeed = [
  {
    category: "Language Lab",
    author: "Benbon",
    title:
      "How Knowledge of Languages Is More Valuable Than Ever on the Job Market",
    excerpt: "It’s not a skill issue, but a marketing issue",
    stats: { date: "5d ago", claps: "1.2k", comments: 45 },
    image: "/images/language-lab.jpg",
  },
  {
    category: "Level Up Coding",
    author: "Attila Vago",
    title: "Welcome To Dream-Driven Development Where Nothing Works",
    excerpt:
      "Half-baked diagrams, features that make no sense, Mikado architecture. You've seen it, you've lived it, and it has a name...",
    stats: { date: "4d ago", claps: "709", comments: 16 },
    image: "/images/dream-driven.jpg",
    tag: "tag",
  },
  {
    category: "Predict",
    author: "lawya writes",
    title:
      "Future-Proof Careers in the Age of AI: What You Should Learn in 2026",
    excerpt:
      "What if I told you that by this time next year, you could land a job that pays over $100,000—and it won't be threatened by AI?...",
    stats: { date: "Jul 30", claps: "3.7k", comments: 165 },
    image: "/images/future-proof.jpg",
  },
  {
    author: "Clean Coder",
    title: "10 Java Collections Tricks Only Seniors Know",
    excerpt:
      "If you’ve been coding in Java for a while, you probably use List, Set, and map every single day. But here's the thing: Most...",
    stats: { date: "3d ago", claps: "52", comments: 5 },
    image: "/images/java-tricks.jpg",
  },
  {
    category: "The Generator",
    author: "Jim the AI Whisperer",
    title:
      "Want to see how insanely stupid AI really is? Ask ChatGPT to answer these riddles in just one word",
    excerpt: "Limiting output length reveals AI isn’t intelligent—it’s chatty!",
    stats: { date: "3d ago", claps: "2k", comments: 36 },
    image: "/images/ai-riddles.jpg",
  },
];

export const staffPicks = [
  {
    title:
      "How this brand strategist uses Medium to explore ideas, repurpose content, and land clients",
    author: "Zulie @ Medium",
    category: "The Medium Handbook",
    stats: { date: "2d ago" },
  },
  {
    title:
      'From "I Have To" to "I Get To": How One Word Change Rewires Your Brain',
    author: "Jud Brewer MD PhD",
    stats: { date: "5d ago" },
  },
  {
    title: "Golden Design Lessons from Tokyo Metro",
    author: "Linh Nguyen",
    stats: { date: "Sep 11" },
  },
];

export const recommendedTopics = [
  "Data Science",
  "React",
  "Coding",
  "Mental Health",
  "UX",
  "Python",
  "Productivity",
];

export const whoToFollow = [
  {
    name: "Dr. Derek Austin",
    description: "AI Content Engineer I teach LLMs to think. Full...",
    verified: true,
  },
  {
    name: "ITNEXT",
    type: "Publication",
    description: "ITNEXT is a platform for IT developers & software...",
  },
  {
    name: "Oliver Foster",
    description: "Primarily proficient in the Java programming...",
  },
];

export const links = [
  "Help",
  "Status",
  "About",
  "Careers",
  "Press",
  "Blog",
  "Privacy",
  "Rules",
  "Terms",
  "Text to speech",
];

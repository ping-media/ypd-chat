import LogoWhite from "../assets/logo/logo-white.png";
import Logo from "../assets/logo/logo.png";
import Dark from "../assets/logo/logo-dark.png";
import panelDark from "../assets/icon/panel_close.svg";
import PanelLight from "../assets/icon/panel_close_light.svg";

import student from "../assets/images/student.png";
import parent from "../assets/images/parent.png";
import professional from "../assets/images/professional.png";
import teacher from "../assets/images/teacher.png";
import profile1 from "../assets/images/profile_1.png";
import profile2 from "../assets/images/profile_2.png";
import avatar from "../assets/images/avatar.png";
import userOne from "../assets/images/user_1.png";
import UserTwo from "../assets/images/user_2.png";
import UserThree from "../assets/images/user_3.png";
import {
  FileQuestionMark,
  GraduationCap,
  Info,
  KeyRound,
  Languages,
  Shield,
  ShieldCheck,
  Star,
  User2,
} from "lucide-react";

export const images = {
  logo: Logo,
  "logo-light": LogoWhite,
  "logo-dark": Dark,
  teacher: teacher,
  "profile-1": profile1,
  "profile-2": profile2,
  avatar: avatar,
};

export const icons = {
  PanelLeftClose: PanelLight,
  PanelLeftCloseDark: panelDark,
  user: User2,
  language: Languages,
  key: KeyRound,
  Security: Shield,
  info: Info,
  help: FileQuestionMark,
};

export const dummyChats = [
  {
    id: 1,
    sender: "user",
    message: "Hey, can you help me with something?",
    timestamp: "2025-08-07T10:01:00Z",
  },
  {
    id: 2,
    sender: "ai",
    message: "Of course! What do you need help with?",
    timestamp: "2025-08-07T10:01:10Z",
  },
  {
    id: 3,
    sender: "user",
    message: "I need a good caption for my vacation photo.",
    timestamp: "2025-08-07T10:02:00Z",
  },
  {
    id: 4,
    sender: "ai",
    message: "How about: 'Chasing sunsets and dreams 🌅✨'?",
    timestamp: "2025-08-07T10:02:15Z",
  },
  {
    id: 5,
    sender: "user",
    message: "Love it! Can you make it funnier?",
    timestamp: "2025-08-07T10:02:40Z",
  },
  {
    id: 6,
    sender: "ai",
    message:
      "Sure! Try this: 'Currently out of office. If it's urgent, try the beach!' 🏖️",
    timestamp: "2025-08-07T10:03:05Z",
  },
  {
    id: 7,
    sender: "user",
    message: "😂 Perfect. Also, can you remind me to send an email at 3 PM?",
    timestamp: "2025-08-07T10:03:20Z",
  },
  {
    id: 8,
    sender: "ai",
    message: "Got it. I’ll remind you at 3 PM today to send the email.",
    timestamp: "2025-08-07T10:03:30Z",
  },
];

export const roles = [
  { title: "I'm a student", image: student },
  { title: "I'm a Parent", image: parent },
  { title: "I'm a Professional", image: professional },
];

export const quotes = [
  {
    message:
      "“Your mind is a powerful thing. When you fill it with positive thoughts, your life will start to change.”",
    name: "— Buddha",
  },
  {
    message:
      "“Your mind is a powerful thing. When you fill it with positive thoughts, your life will start to change.”",
    name: "— Buddha",
  },
  {
    message:
      "“Your mind is a powerful thing. When you fill it with positive thoughts, your life will start to change.”",
    name: "— Buddha",
  },
  {
    message:
      "“Your mind is a powerful thing. When you fill it with positive thoughts, your life will start to change.”",
    name: "— Buddha",
  },
];

export const testimonials = [
  {
    message:
      "I was confused between engineering and design. YPD’s AI assessment revealed my creative problem-solving strengths and guided m toward UX Design.",
    rating: 4,
    highlight: "Now pursuing Design at NIFT Delhi with 95% scholarship",
    user: {
      avatar: userOne,
      name: "Priya Agarwal",
      location: "Agra, Uttarpradesh",
    },
  },
  {
    message:
      "The assessment uncovered my leadership potential and analytical thinking. It recommended Business Analytics over traditional MBA path.",
    rating: 4,
    highlight: "Secured internship at Fortune 500 company in Data Science",
    user: {
      avatar: UserTwo,
      name: "Arjun Sharma",
      location: "New Delhi",
    },
  },
  {
    message:
      "YPD helped me discover m passion  for sustainable technology. The AI identified my environmental consciousness and tech aptitude perfectly.",
    rating: 4,
    highlight:
      "Launched successful EdTech startup focused on environmental education",
    user: {
      avatar: UserThree,
      name: "Shreya Benerjee",
      location: "Kolkata, West Bengal",
    },
  },
];

export const HomeCardList = [
  {
    icon: ShieldCheck,
    message: "100% Scientifically Validated",
  },
  {
    icon: GraduationCap,
    message: "Trusted by 10,000+ Students",
  },
  {
    icon: Star,
    message: "98% Accuracy Rate",
  },
  {
    icon: User2,
    message: "Individual & Institutional Use",
  },
];

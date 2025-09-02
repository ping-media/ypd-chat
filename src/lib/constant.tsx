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
import {
  FileQuestionMark,
  Info,
  KeyRound,
  Languages,
  Shield,
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

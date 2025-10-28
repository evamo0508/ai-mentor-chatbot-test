import { ColorScheme, StartScreenPrompt, ThemeOption } from "@openai/chatkit";

export const WORKFLOW_ID =
  process.env.NEXT_PUBLIC_CHATKIT_WORKFLOW_ID?.trim() ?? "";

export const CREATE_SESSION_ENDPOINT = "/api/create-session";

export const STARTER_PROMPTS: StartScreenPrompt[] = [
  {
    label: "What can you do?",
    prompt: "What can you do?",
    icon: "circle-question",
  },
];

export const PLACEHOLDER_INPUT = "Ask anything...";

export const HEADER_GREETING = [
  "👋 歡迎來到人生教育部，我是你的 AI 導師。",
  "",
  "我的任務是陪你一起探索課本以外對人生最重要的課題：",
  "💰 財務規劃｜💭 情緒管理｜💪 健康習慣｜💞 愛情與人際經營",
  "",
  "我不只是回答問題，更會陪你一起釐清方向、練習思考、找到屬於你的節奏。",
  "",
  "那麼，告訴我吧——",
  "你最近最想改善或學習的是哪一個領域？ 😊"
].join("\n");

// Keep ChatKit's built-in start screen greeting empty to avoid duplication,
// since we render our own multi-line header above the widget.
export const GREETING = "";


export const getThemeConfig = (theme: ColorScheme): ThemeOption => ({
  color: {
    grayscale: {
      hue: 220,
      tint: 6,
      shade: theme === "dark" ? -1 : -4,
    },
    accent: {
      primary: theme === "dark" ? "#f1f5f9" : "#0f172a",
      level: 1,
    },
  },
  radius: "round",
  // Add other theme options here
  // chatkit.studio/playground to explore config options
});

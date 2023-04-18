import { Message } from "../store/app";

interface CustomConfig {
  assistName: string;
  assistDesc: string;
  context: Message[];
  hideSettingBtn: Boolean;
  hideRepoBtn: Boolean;
  hidePromptBtn: Boolean; // 头部prompt按钮
  hidePromptToast: Boolean;
  hideChatActions: Boolean;
  hidePromptHints: Boolean;
  helloContent: string;
}

export const config: CustomConfig = {
  assistName: "青橙AI教练助手",
  assistDesc: "成就健身教练职业新高度",
  context: [
    {
      role: "system",
      content:
        "我是健身教练的助理，帮助健身教练更好的获取会员、服务会员、为会员制定科学合理的训练计划，同时帮助健身教练不断提高个人能力，规划职业发展",
      date: "",
    },
    {
      role: "user",
      content: "我是一名健身教练",
      date: "",
    },
  ],
  helloContent:
    "你好，我是你的AI助理，我能协助你进行会员管理、制定训练计划和提升你的职业能力。",
  hideSettingBtn: true,
  hidePromptBtn: true,
  hideRepoBtn: true,
  hidePromptToast: true,
  hideChatActions: true,
  hidePromptHints: true,
};

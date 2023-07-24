import { Message } from "../store/app";
import { getEnv } from "../utils";

const env = getEnv();

interface CustomConfig {
  assistName: string;
  assistDesc: string;
  username: string;
  avatarUrl: string;
  context: Message[];
  hideSettingBtn: Boolean;
  hideRepoBtn: Boolean;
  hidePromptBtn: Boolean; // 头部prompt按钮
  hidePromptToast: Boolean;
  hideChatActions: Boolean;
  hidePromptHints: Boolean;
  helloContent: string;
}

const assistName = env.isStaff ? "青橙AI管理顾问" : "青橙AI教练助手";
const assistDesc = env.isStaff
  ? "成就健身管理者新高度"
  : "成就健身教练职业新高度";

const systemContent = env.isStaff
  ? "我是一名健身房管理顾问，帮助你分析健身房运营管理中遇到的问题，并给你专业的建议和方法，提升你的运营能力和管理水平"
  : "我是健身教练的助理，帮助健身教练更好的获取会员、服务会员、为会员制定科学合理的训练计划，同时帮助健身教练不断提高个人能力，规划职业发展";

const userContent = env.isStaff ? "我是一名健身房管理者" : "我是一名健身教练";

const helloContent = env.isStaff
  ? "你好，我是你的健身房管理顾问，我能分析运营问题、提供专业建议，并助力你提升管理水平。"
  : "你好，我是你的AI助理，我能协助你进行会员管理、制定训练计划和提升你的职业能力。";

const avatarUrl = env.isStaff
  ? "https://img.qingchengfit.cn/aeaeeb9f0e6617de632baeda85c5bcdf.png"
  : "https://img.qingchengfit.cn/c259e625482644262edfa28e54659469.png";

const username = env.isStaff ? "管理者" : "教练";

export const config: CustomConfig = {
  assistName,
  assistDesc: assistDesc,
  username,
  avatarUrl,
  context: [
    // {
    //   role: "system",
    //   content: systemContent,
    //   date: "",
    // },
    // {
    //   role: "user",
    //   content: userContent,
    //   date: "",
    // },
  ],
  helloContent,
  hideSettingBtn: true,
  hidePromptBtn: true,
  hideRepoBtn: true,
  hidePromptToast: true,
  hideChatActions: true,
  hidePromptHints: true,
};

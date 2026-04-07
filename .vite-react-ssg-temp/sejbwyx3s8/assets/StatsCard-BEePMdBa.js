import { jsxs, jsx } from "react/jsx-runtime";
import { C as Card } from "./card-BUhh-XFb.js";
const StatsCard = ({ icon: Icon, value, label, color = "blue" }) => {
  const colorClasses = {
    blue: "text-telegram-blue bg-primary/10",
    green: "text-success bg-success/10",
    orange: "text-orange-500 bg-orange-50",
    gray: "text-muted-foreground bg-muted/50"
  };
  return /* @__PURE__ */ jsxs(Card, { className: "p-6 text-center hover:shadow-card transition-all duration-300 border-border/50 hover:border-telegram-blue/20", children: [
    /* @__PURE__ */ jsx("div", { className: `w-12 h-12 mx-auto mb-3 rounded-full flex items-center justify-center ${colorClasses[color]}`, children: /* @__PURE__ */ jsx(Icon, { className: "w-6 h-6" }) }),
    /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-foreground mb-1", children: value }),
    /* @__PURE__ */ jsx("div", { className: "text-sm text-muted-foreground", children: label })
  ] });
};
export {
  StatsCard as S
};

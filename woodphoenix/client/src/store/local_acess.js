const NAME_RULES = "@RULES_WOODPHOENIX";

export default function useRules() {
  return {
    GET: function () {
      return localStorage.getItem(NAME_RULES);
    },
    SET: function (item) {
      localStorage.setItem(NAME_RULES, item);
    },
  };
}

import fetch from "node-fetch";

const baseUrl = "https://jamstack-sample-hr.microcms.io/api/v1";

const headers = {
  "X-API-KEY": "1c5566a0-59ac-414c-b097-b9dabba61373",
};

// 記事一覧を取得する関数
export async function getItems() {
  const res = await fetch(`${baseUrl}/items`, { headers });
  return res.json();
}

// 記事詳細を取得する関数
export async function getItem({ id }) {
  const res = await fetch(`${baseUrl}/items/${id}`, { headers });
  return res.json();
}

# Form Setup Guide / 问卷创建操作指南

Use this together with `docs/survey-forms.md`, which contains the exact questions and options.

## Google Form / English Survey

1. Open Google Forms: https://forms.google.com
2. Click **Blank form**.
3. Title: `AGI Radar: AGI / ASI Pulse`.
4. Paste the description from `docs/survey-forms.md`.
5. Create the 10 questions from the English section.
   - Questions 1-5 and 7 should be multiple choice.
   - Questions 6, 8, and 10 should be short answer or paragraph.
   - Question 9 should be optional multiple choice.
6. Open **Settings**.
   - Do not collect email addresses unless you explicitly want that.
   - Do not restrict to one organization.
   - Keep responses anonymous for V1.
7. Open the **Responses** tab.
8. Click **Link to Sheets** to create a Google Sheet for responses.
9. Click **Send**.
10. Choose the link icon, copy the public form link, and send it to Codex.
11. Optional: choose the embed icon and copy the iframe `src` URL if you want the form embedded on the website.

Later automation:

1. Open the linked Google Sheet.
2. Use **File -> Share -> Publish to web** if you want a published CSV source.
3. Send Codex the published CSV/export link.
4. Codex can then add a GitHub Actions job to refresh public stats every two weeks.

Official help:

- Publish and share Google Forms: https://support.google.com/docs/answer/2839588
- Link Forms responses to Sheets: https://support.google.com/docs/answer/2917686

## 问卷星 / 中文问卷

1. 打开问卷星：https://www.wjx.cn
2. 登录你的账号。
3. 新建问卷，建议选择「调查」或「表单」类型，从空白创建。
4. 标题：`AGI 小雷达：AGI / ASI 小调查`。
5. 复制 `docs/survey-forms.md` 里的中文说明文案。
6. 按中文部分创建 10 道题。
   - 第 1-5、7、9 题用单选题。
   - 第 6、8、10 题用填空题或多行文本题。
   - 第 6、8、9、10 题设为非必填。
7. 检查问卷设置。
   - V1 建议匿名收集，不要求姓名、手机号、微信等个人信息。
   - 如果有「每人限答一次」之类选项，可以先不开，减少填写阻力。
8. 发布问卷。
9. 复制公开填写链接，发给 Codex。
10. 如果问卷星提供嵌入代码，也可以把 iframe 地址一并发给 Codex。

数据导出：

1. 进入问卷管理后台。
2. 找到「分析下载 / 查看下载答卷」一类入口。
3. 下载原始答卷数据，优先选择 Excel 或 CSV。
4. 后续如果没有 OpenAPI 权限，就手动把导出的文件交给 Codex 合并更新网站。

自动化：

- 问卷星的 OpenAPI 需要问卷星自己的 API Key，不是 OpenAI API key。
- 如果你的账号能看到 API Key / OpenAPI 权限，后面可以把 `WJX_API_KEY` 配到 GitHub Actions。
- 如果暂时没有这个权限，先手动导出中文 CSV，也不影响今天发布。

官方帮助：

- 问卷星 OpenAPI / AI 工具说明：https://www.wjx.cn/help/help.aspx?helpid=905
- 问卷星下载原始答卷数据：https://www.wjx.cn/help/help.aspx?catid=22&h=1

## Send Back To Codex

After creating the forms, send these:

```text
中文问卷星链接：
英文 Google Form 链接：
Google Form embed src（可选）：
问卷星 embed src（可选）：
Google Sheet CSV/export link（以后自动同步用，可选）：
```

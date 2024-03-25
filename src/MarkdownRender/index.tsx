// import 'github-markdown-css/github-markdown.css';
import MarkdownIt from 'markdown-it';
import './index.less';
import './markdown.light.css';

// 创建一个MarkdownIt实例
const mdParser = new MarkdownIt({
  linkify: true, // 自动识别类似url格式文本，转化为链接
  breaks: true, // 识别 /n 转化为 <br>
});

function MarkdownRender({ content }: any) {
  // 将Markdown文本转换为HTML
  const markdownHtml = mdParser.render(content);

  // 使用dangerouslySetInnerHTML渲染HTML内容
  // 注意：确保传入的Markdown内容是可信的，避免XSS攻击
  return (
    <div
      className="component-markdown-render markdown-body"
      dangerouslySetInnerHTML={{ __html: markdownHtml }}
    />
  );
}

export default MarkdownRender;

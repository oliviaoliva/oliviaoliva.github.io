// Trabalho com IA, descrito SEM nomes de empresas/clientes.
// `demo` alimenta o painel animado do hero (input → configuração → output).

export type Work = {
  id: string;
  title: string;
  domain: string;
  summary: string;
  pipeline: string[];
  output: { value: string; label: string };
  stack: string[];
  demo: { prompt: string; model: string; mode: string; result: string };
};

export const work: Work[] = [
  {
    id: 'textbook-adaptation',
    title: 'Textbook adaptation for neurodivergent learners',
    domain: 'Generative AI · Education',
    summary:
      'A generative AI pipeline that helps teachers adapt entire textbooks for neurodivergent students, work that used to take up to six months per book.',
    pipeline: ['Document ingestion', 'Content detection', 'LLM adaptation', 'Teacher review'],
    output: { value: '< 2 min', label: 'per book, down from up to 6 months' },
    stack: ['Amazon Bedrock', 'Python', 'AWS'],
    demo: {
      prompt:
        'Adapt chapter 4 for students with ADHD: shorter sentences, one idea per paragraph, key terms highlighted, same learning goals.',
      model: 'LLM · Amazon Bedrock',
      mode: 'Full textbook',
      result: 'Adapted textbook, ready for teacher review',
    },
  },
  {
    id: 'non-text-detection',
    title: 'Finding non-text content in textbooks & exams',
    domain: 'Computer Vision',
    summary:
      'Trained a YOLOv8-nano detector on ~3,000 hand-labeled pages, using an in-house labeling tool so proprietary material never left the environment.',
    pipeline: ['In-house labeling', '~3k images', 'YOLOv8-nano', 'Detection'],
    output: { value: '~98%', label: 'detection accuracy' },
    stack: ['SageMaker', 'YOLOv8', 'Python'],
    demo: {
      prompt: 'exam_page_017.png: find every figure, table and formula on this page.',
      model: 'YOLOv8-nano · SageMaker',
      mode: 'Trained on ~3k labeled pages',
      result: 'Non-text regions detected and boxed',
    },
  },
  {
    id: 'agent-copilot',
    title: 'Spanish-language copilot for customer-service agents',
    domain: 'Conversational AI · Financial services',
    summary:
      'Built with a team: answers FAQs and pulls live client and transaction data from internal APIs, turning raw records into clear answers. In production, with IaC, CI/CD and monitoring.',
    pipeline: ['Lex intent', 'Lambda', 'Internal APIs', 'Claude Sonnet'],
    output: { value: 'hrs → min', label: 'end-to-end deploys after IaC + CI/CD' },
    stack: ['Amazon Lex', 'Lambda', 'Bedrock', 'DynamoDB', 'Cognito', 'CloudFormation'],
    demo: {
      prompt: '¿Cuál fue la última transacción del cliente y por qué fue rechazada?',
      model: 'Claude Sonnet · Bedrock',
      mode: 'Live client data',
      result: 'Clear answer for the agent, grounded in live data',
    },
  },
  {
    id: 'handwritten-orders',
    title: 'From a photo of a handwritten order to a registered sale',
    domain: 'AI Agents · Retail',
    summary:
      'Salespeople send a photo of a handwritten order by chat. The agent extracts the items, validates product codes against the catalog and registers the sale via API, after a human confirms.',
    pipeline: ['Vision extraction', 'Catalog check', 'Human confirms', 'Sale via API'],
    output: { value: 'hrs → min', label: 'order entry time' },
    stack: ['Lambda', 'API Gateway', 'RDS'],
    demo: {
      prompt: 'photo_order.jpg: handwritten order sent by a salesperson over chat.',
      model: 'Vision extraction agent',
      mode: 'Human in the loop',
      result: 'Items validated, sale registered via API',
    },
  },
  {
    id: 'ai-built-tools',
    title: 'A startup’s internal tools, built with AI',
    domain: 'AI-assisted engineering',
    summary:
      'Shipped 3 tools end to end for a 10-person team with Claude Code: a CRM built in one week that replaced a paid subscription, a marketing automation tool, and bots for task and product work.',
    pipeline: ['Claude Code', 'CRM', 'Marketing automation', 'Team bots'],
    output: { value: '1 week', label: 'to ship a CRM for hundreds of clients' },
    stack: ['Claude Code', 'LLMs', 'Automation'],
    demo: {
      prompt: 'We need a CRM for hundreds of clients, and we want to stop paying for a subscription.',
      model: 'Claude Code',
      mode: 'AI-assisted development',
      result: 'CRM + marketing tool + team bots, shipped',
    },
  },
];

export const stats = [
  { label: 'Textbook adaptation time', value: '< 2 min', note: 'per book, was up to 6 months' },
  { label: 'Custom vision model accuracy', value: '~98%', note: 'YOLOv8-nano, ~3k labeled images' },
  { label: 'To ship a production CRM', value: '1 wk', note: 'built with Claude Code' },
  { label: 'AWS certifications', value: '3×', note: 'Developer · AI · Cloud' },
];

// Ferramentas (não empresas) para a faixa de logos
export const tools = ['AWS', 'Amazon Bedrock', 'Claude', 'SageMaker', 'Python', 'TypeScript', 'Lambda', 'YOLOv8', 'Terraform', 'React'];

export const stack = [
  {
    group: 'AI & ML',
    items: ['LLMs', 'Generative AI', 'AI agents', 'Amazon Bedrock', 'Claude', 'Amazon Lex', 'SageMaker', 'YOLOv8', 'NLP', 'Textract'],
  },
  {
    group: 'Cloud',
    items: ['Lambda', 'API Gateway', 'Step Functions', 'DynamoDB', 'RDS', 'S3', 'Cognito', 'CloudWatch', 'CloudFormation', 'CodePipeline', 'Terraform', 'Google Cloud'],
  },
  {
    group: 'Code',
    items: ['Python', 'TypeScript', 'Node.js', 'SQL', 'React', 'Angular', 'Airflow', 'Snowflake', 'Git'],
  },
];

import { GoogleGenAI } from "@google/genai";

// This service will be used to generate full blog posts and SEO descriptions
// when the admin functionality is implemented.

const getAiClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.warn("API Key is missing. AI features will be disabled.");
    return null;
  }
  return new GoogleGenAI({ apiKey });
};

export const generateArticleContent = async (topic: string, keywords: string[]): Promise<string> => {
  const ai = getAiClient();
  if (!ai) return "API Key Required to generate content.";

  const prompt = `
    다음 주제에 대해 SEO에 최적화된 블로그 글을 작성해주세요.
    주제: ${topic}
    포함해야 할 키워드: ${keywords.join(', ')}
    
    조건:
    1. 독자가 읽기 쉽도록 서론, 본론(소제목 포함), 결론으로 구성하세요.
    2. 전문적이면서도 친근한 어조를 사용하세요.
    3. HTML 태그 없이 순수 텍스트나 마크다운 형식으로 작성하세요.
    4. 글자 수는 공백 포함 2000자 내외로 작성하세요.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
    });
    return response.text || "콘텐츠 생성에 실패했습니다.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
};
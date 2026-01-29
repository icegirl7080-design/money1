import { GoogleGenAI } from "@google/genai";

// This service handles content generation including text and images.

export const generateArticleContent = async (topic: string, keywords: string[]): Promise<string> => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) return "API Key Required to generate content.";
  
  // Create instance per call to ensure fresh key if updated
  const ai = new GoogleGenAI({ apiKey });

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

export const generateMarketingImage = async (prompt: string, type: 'hero' | 'card'): Promise<string | null> => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) return null;

  const ai = new GoogleGenAI({ apiKey });

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-image-preview',
      contents: {
        parts: [{ text: prompt }],
      },
      config: {
        imageConfig: {
          aspectRatio: type === 'hero' ? '16:9' : '3:4',
          imageSize: '1K',
        }
      }
    });

    for (const part of response.candidates?.[0]?.content?.parts || []) {
      if (part.inlineData) {
        return `data:image/png;base64,${part.inlineData.data}`;
      }
    }
    return null;
  } catch (error) {
    console.error("Image Gen Error:", error);
    return null;
  }
};
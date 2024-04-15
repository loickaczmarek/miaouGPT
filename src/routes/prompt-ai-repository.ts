import { ChatOpenAI } from "@langchain/openai";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { StringOutputParser } from "@langchain/core/output_parsers";

export class PromptAiRepository {

    private model
    private outputParser
    private prompt

    constructor() {
        this.model = new ChatOpenAI({apiKey: import.meta.env.VITE_OPENAI_API_KEY});
        this.outputParser = new StringOutputParser();
        this.prompt = ChatPromptTemplate.fromMessages([
            ["human", "{question}"],
        ]);
    }

    async sendAnswer(question) {
        const chain = this.prompt.pipe(this.model).pipe(this.outputParser);

        return await chain.invoke({
            question,
        });
    }
}
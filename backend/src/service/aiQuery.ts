import { SquidService, secureDatabase, executable } from '@squidcloud/backend';

export class ExampleService extends SquidService {
  @secureDatabase('all', 'built_in_db')
  allowAccessToBuiltInDb(): boolean {
    return true;
  }

  @executable()
  async askQuestion(question: string): Promise<string> {
    const aiResponse = await this.squid
      .ai()
      .executeAiQuery('built_in_db', question);

    console.log(`
      Question: ${question}
      Query: ${aiResponse.executedQuery ?? 'No query executed'}
      Explanation: ${aiResponse.explanation ?? 'No Explanation'}`)
    
      return aiResponse.answer
  }
}

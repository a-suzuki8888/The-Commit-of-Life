// src/data/grassData.ts

export type Grass = {
	date: string; // "2024-06-08"
	level: number; // 0~4
  };
  
  // 日付を生成するヘルパー関数
  function generateDate(index: number): string {
	const date = new Date(2024, 0, 1); // 2024年1月1日から開始
	date.setDate(date.getDate() + index);
	return date.toISOString().split('T')[0];
  }
  
  // 365日分のデータを生成
  export const grassData: Grass[] = Array.from({ length: 365 }, (_, i) => {
	const level = 0;
	const date = generateDate(i);
	return { date, level };
  });
  
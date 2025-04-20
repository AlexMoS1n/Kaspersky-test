import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';
import { MemoryRouter } from 'react-router';

import { SnippetNews } from './SnippetNews';

import { mockData } from './mock.ts';

const meta = {
	title: 'Root/SnippetNews',
	component: SnippetNews,
	parameters: {
		// More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
		layout: 'fullscreen',
		viewport: {
			defaultViewport: 'desktop',
		},
	},
	decorators: [
		(Story) => (
			<MemoryRouter>
				<Story />
			</MemoryRouter>
		),
	], // Добавлено
} satisfies Meta<typeof SnippetNews>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on interaction testing: https://storybook.js.org/docs/writing-tests/interaction-testing
export const WithStateChanged: Story = {
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const element = canvas.getByTestId('SnippetNews');
		await expect(element).toBeInTheDocument();
	},
	args: {
			ID: mockData.ID,            
			TI: mockData.TI,             
			AB: mockData.AB,             
			URL: mockData.URL,            
			DOM: mockData.DOM,             
			DP: mockData.DP,              
			LANG: mockData.LANG,            
			REACH: mockData.REACH,           
			KW: mockData.KW,              
			AU: mockData.AU,              
			CNTR: mockData.CNTR,           
			CNTR_CODE: mockData.CNTR_CODE,       
			SENT: mockData.SENT,            
			TRAFFIC: mockData.TRAFFIC,         
			FAV: mockData.FAV,             
			HIGHLIGHTS: mockData.HIGHLIGHTS,      
			DUPLICATES: mockData.DUPLICATES, 
	},
};

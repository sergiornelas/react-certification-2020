import React from 'react';
import { screen, render } from '@testing-library/react';
import 'jest-styled-components';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from 'react-router-dom';
import VideoCards from './VideoCards';

const videoData = [
  {
    etag: '1',
    id: { videoId: 'testVideoId1' },
    snippet: {
      title: 'Title 1',
      description: 'Description',
      thumbnails: {
        medium: {
          url: 'http://randomurl.com',
        },
      },
    },
  },
  {
    etag: '2',
    id: { videoId: 'testVideoId2' },
    snippet: {
      title: 'Title 2',
      description: 'Description 2',
      thumbnails: {
        medium: {
          url: 'http://randomurl2.com',
        },
      },
    },
  },
];

describe('video detail', () => {
  test('video title is rendered', () => {
    render(
      <BrowserRouter>
        <VideoCards videosMetaInfo={videoData} />
      </BrowserRouter>
    );
    expect(screen.getByText('Title 1')).toBeInTheDocument();
  });

  test('confirm alt text of images', () => {
    render(
      <BrowserRouter>
        <VideoCards videosMetaInfo={videoData} />
      </BrowserRouter>
    );
    const images = screen.getAllByRole('img');
    const altText = images.map((element) => element.alt);
    expect(altText).toEqual(['Title 1', 'Title 2']);
  });
});

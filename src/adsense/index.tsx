import React from 'react';
import { Adsense } from '@ctrl/react-adsense';
import { Container } from './styles';

export function AdsenseComponent() {
  //console.log("Ads Shown")
  return (
    <Adsense
      className="ExampleAdSlot"
      client="ca-pub-2355270944938956"
      slot="3007244890"
      adTest="on" //Dev Only
    //   style={{
    //     width: '250px',
    //     height: '250px',
    //     display: 'block',
    //     position: 'absolute',
    //     backgroundColor: '#ccc',
    //   }}
      format=""
    />
  );
}

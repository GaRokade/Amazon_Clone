
import React from 'react';

export default function Picture() {

  const handleImageClick1 = () => {
    // Open a new URL in a new tab when the image is clicked
    window.open('https://www.amazon.in/b/ref=surl_fashion/?_encoding=UTF8&node=6648217031&pd_rd_w=gTyuW&content-id=amzn1.sym.fd3d60f7-29ad-49a0-9806-0537521c536e&pf_rd_p=fd3d60f7-29ad-49a0-9806-0537521c536e&pf_rd_r=RAP317F2E83RFS3AH1V6&pd_rd_wg=Lh3Ks&pd_rd_r=36d215fb-1f78-4cd9-a6ef-cc758007bb3c');
  }
  const handleImageClick2 = () => {
    // Open a new URL in a new tab when the image is clicked
    window.open('https://www.amazon.in/b/?_encoding=UTF8&node=1389401031&ref_=hero1_WLDUber&pd_rd_w=aggfq&content-id=amzn1.sym.ad784a32-2024-43d6-ad13-73c7e0572193&pf_rd_p=ad784a32-2024-43d6-ad13-73c7e0572193&pf_rd_r=RAP317F2E83RFS3AH1V6&pd_rd_wg=Lh3Ks&pd_rd_r=36d215fb-1f78-4cd9-a6ef-cc758007bb3c');
  }
  const handleImageClick3 = () => {
    // Open a new URL in a new tab when the image is clicked
    window.open('https://www.amazon.in/s?hidden-keywords=B0BSGT7CLR+%7C+B09R24JBYV+%7C+B09N3ZLB3T+%7C+B0BBVQYCGT+%7C+B08TTXNZ4Y+%7C+B0CJ8Y7GL5+%7C+B0CC8WQY19+%7C+B0BKZFKQ3G+%7C+B07KY3FNQP+%7C+B0BBTYBLJV+%7C+B092X94QNQ+%7C+B09NNSM134+%7C+B09Y5MP7C4+%7C+B0CQJXC3SP+%7C+B0B31CBSXQ+%7C+B0CTCWQLLP+%7C+B09NR7Z144+%7C+B0C24H98Y6+%7C+B0BQN2RMJF+%7C+B0C23MGYWM+%7C+B0BQN2RMJF+%7C+B0C24JLQBK+%7C+B0C24KBK24+%7C+B0CHVVFBYK+%7C+B09Y5MK1KB+%7C+B0B217Z5VK+%7C+B0BJ7B3JB8+%7C+B0B6PF7Y5H+%7C+B0C4122BZT+%7C+B0999NDRFC+%7C+B07XMFDHSG+%7C+B0B8VBVVMW+%7C+B08225158Y+%7C+B0999NNBPV+%7C+B097KMXXTZ+%7C+B0B52DZN9Z+%7C+B0C6VLWF6G+%7C+B0C866HN37+%7C+B0CNZDWH82+%7C+B0CGMHPNG5+%7C+B0CP5GN2QJ&_encoding=UTF8&content-id=amzn1.sym.7ebd4b90-b078-453a-94a1-357ddd025f9a&pd_rd_r=36d215fb-1f78-4cd9-a6ef-cc758007bb3c&pd_rd_w=rjUpR&pd_rd_wg=Lh3Ks&pf_rd_p=7ebd4b90-b078-453a-94a1-357ddd025f9a&pf_rd_r=RAP317F2E83RFS3AH1V6');
  };
  return (
    
      <div>
      <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner"style={{height:'550px',width:'1392px'}}>
    <div class="carousel-item active">
      <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img24/Fashion/GW/Feb/BOB/22._CB581967458_.jpg"   alt="Clickable Image" onClick={handleImageClick1} style={{height:'550px',width:'1392px',cursor:'pointer'}}></img><div  >
      
      </div>
    </div>
    <div class="carousel-item">
    <img src='https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/devjyoti/GW/Uber/Nov/D103625178_DesktopTallHero_3000x1200._CB574597993_.jpg'alt="Clickable Image"
        onClick={handleImageClick2}
         style={{height:'550px',width:'1392px',cursor: 'pointer' }}></img>
    </div>
    <div class="carousel-item">
    <img src='https://images-eu.ssl-images-amazon.com/images/G/31/img24hp/unrec/hero/Under_1499_Tallhero_3000x1200._CB581597259_.jpg' alt="Clickable Image"
        onClick={handleImageClick3}
         style={{height:'550px',width:'1392px',cursor: 'pointer' }}></img>
    
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    
  </div>
    
  )
}
//https://www.amazon.in/b/ref=surl_fashion/?_encoding=UTF8&node=6648217031&pd_rd_w=gTyuW&content-id=amzn1.sym.fd3d60f7-29ad-49a0-9806-0537521c536e&pf_rd_p=fd3d60f7-29ad-49a0-9806-0537521c536e&pf_rd_r=RAP317F2E83RFS3AH1V6&pd_rd_wg=Lh3Ks&pd_rd_r=36d215fb-1f78-4cd9-a6ef-cc758007bb3c
//https://www.amazon.in/b/?_encoding=UTF8&node=1389401031&ref_=hero1_WLDUber&pd_rd_w=aggfq&content-id=amzn1.sym.ad784a32-2024-43d6-ad13-73c7e0572193&pf_rd_p=ad784a32-2024-43d6-ad13-73c7e0572193&pf_rd_r=RAP317F2E83RFS3AH1V6&pd_rd_wg=Lh3Ks&pd_rd_r=36d215fb-1f78-4cd9-a6ef-cc758007bb3c
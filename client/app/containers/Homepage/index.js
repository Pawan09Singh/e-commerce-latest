/**
 *
 * Homepage
 *
 */

import React from 'react';

import { connect } from 'react-redux';
import { Row, Col } from 'reactstrap';

import actions from '../../actions';
import banners from './banners.json';
import CarouselSlider from '../../components/Common/CarouselSlider';
import { responsiveOneItemCarousel } from '../../components/Common/CarouselSlider/utils';
import Speciality from '../../components/Common/Speciality';

class Homepage extends React.PureComponent {
  render() {
    return (
      <div className='homepage'>
        <Row className='flex-row'>
          <Col xs='12' className='mb-3 px-3 px-md-2'>
            <div className='home-carousel'>
              <CarouselSlider
                swipeable={true}
                showDots={true}
                infinite={true}
                autoPlay={false}
                slides={banners}
                responsive={responsiveOneItemCarousel}
              >
                {banners.map((item, index) => (
                  <img
                    key={index}
                    src={item.imageUrl}
                    alt={`Banner ${index + 1}`}
                    style={{
                      width: '100%',
                      height: 'auto',
                      objectFit: 'cover' // Optional: Ensures the image covers the area without distortion
                    }}
                  />
                ))}
              </CarouselSlider>
            </div>
          </Col>
        </Row>

        
        <Speciality/>
        
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps, actions)(Homepage);

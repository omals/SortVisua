import React from 'react';
import Icon1 from '../../images/Bubblesort.svg';
import Icon2 from '../../images/svg-6.svg';
import Icon3 from '../../images/quick.svg';

import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard , ServicesIcon, ServicesH2 , ServicesP } from './ServicesElements';

const Services = () => {
  return (
    <ServicesContainer id="types">
        <ServicesH1>
            Types of Sorting Algorithms
        </ServicesH1>
        <ServicesWrapper>
            <ServicesCard>
                <ServicesIcon src={Icon1}/>
                <ServicesH2>Bubble Sort</ServicesH2>
                <ServicesP>Compares two adjacent elements and swaps them until they are in the intended order. 
                        It moves Larges element to the right.
                </ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon2}/>
                <ServicesH2>Merge Sort</ServicesH2>
                <ServicesP>Based on Divide and Conquer paradigm.
                Array is divided into two equal halves and then they are combined in a sorted manner.
                </ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon3}/>
                <ServicesH2>Quick Sort</ServicesH2>
                <ServicesP>QuickSort is a Divide and Conquer algorithm. It picks an element as a pivot and partitions the given array around the picked pivot.</ServicesP>
            </ServicesCard>
        </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services
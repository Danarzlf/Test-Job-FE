import React from 'react'
import { PlusIcon, ArrowUpIcon } from '@heroicons/react/24/outline';
import CardDataStats from '../components/Charts/CardDataStats';

export default function Statistic() {
  return (

    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
                    <CardDataStats title="Overall visitor" total="1,478" rate="15%" levelUp>
                    </CardDataStats>
                    <CardDataStats title="Total doctors" total="210" rate="2.5%" levelUp>
    
                    </CardDataStats>
                    <CardDataStats title="Book appointment" total="321" rate="3.5%" levelUp>
                    
                    </CardDataStats>
                    <CardDataStats title="Room availaility" total="213/335" rate="1.5%" levelDown>
                    
                    </CardDataStats>
    </div>
  )
}

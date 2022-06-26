import React from "react";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import { SkeletonTheme } from 'react-loading-skeleton';

const RestaurantCardSkeleton = () => {
  return (
    <div className="card-skeleton">
      <SkeletonTheme baseColor="#555" highlightColor="#444">
        <p>
          <Skeleton count={1}/>
        </p>
        <p>
          <Skeleton count={1}/>
        </p>
      </SkeletonTheme>
    </div>
  )
}

export default RestaurantCardSkeleton;
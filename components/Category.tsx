import React from "react";
import Image from "next/image";

const Category = ({ category }) => {
    const { id, name, icon } = category;

    return (
        <div className="flex items-center mt-5 cursor-pointer gap-4 hover:bg-gray-200 p-5 ">
            <Image
                src={`/assets/img/icono_${icon}.svg`}
                alt="icon"
                width={50}
                height={50}
            />

            <button type="button" className="text-2xl font-bold text-gray-600">
                {name}
            </button>
        </div>
    );
};

export default Category;

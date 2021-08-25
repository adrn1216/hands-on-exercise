import React from "react";
import "./style.css";

const Solution = () => {
  // Variable
  const cars = [
    {
      brand: "Toyota",
      model: [
        {
          name: "Wigo",
          bodyStyle: [
            {
              name: "Hatchback",
              variant: [
                { code: "TRD", price: 700000 },
                { code: "G", price: 658000 },
              ],
            },
          ],
        },
        {
          name: "Yaris",
          bodyStyle: [
            {
              name: "Hatchback",
              variant: [
                { code: "S", price: 1114000 },
                { code: "E", price: 973000 },
              ],
            },
          ],
        },
        {
          name: "Vios",
          bodyStyle: [
            {
              name: "Sedan",
              variant: [
                { code: "G", price: 970000 },
                { code: "XLE", price: 851000 },
              ],
            },
          ],
        },
      ],
    },
    {
      brand: "Honda",
      model: [
        {
          name: "Brio",
          bodyStyle: [
            {
              name: "Hatchback",
              variant: [
                { code: "RS", price: 753000 },
                { code: "V", price: 661000 },
              ],
            },
          ],
        },
        {
          name: "City",
          bodyStyle: [
            {
              name: "Hatchback",
              variant: [{ code: "RS", price: 1115000 }],
            },
            {
              name: "Sedan",
              variant: [{ code: "V", price: 978000 }],
            },
          ],
        },
        {
          name: "Civic",
          bodyStyle: [
            {
              name: "Sedan",
              variant: [
                { code: "RS", price: 1615000 },
                { code: "E", price: 1188000 },
              ],
            },
          ],
        },
      ],
    },
  ];

  //Methods
  const mapCars = (data) => {
    var mapCars = [];
    data.map((carItem) => {
      carItem.model.map((modelItem) => {
        modelItem.bodyStyle.map((bodyStyleItem) => {
          bodyStyleItem.variant.map((variantItem) => {
            const newData = {
              brand: carItem.brand,
              model: modelItem.name,
              variant: variantItem.code,
              bodyStyle: bodyStyleItem.name,
              price: variantItem.price,
            };
            mapCars = [...mapCars, newData];
          });
        });
      });
    });
    return mapCars;
  };

  const getHighestPrice = () => {
    var mappedCars = mapCars(cars);
    var maxPrice = Math.max(...mappedCars.map((item) => item.price));
    return mappedCars.filter((item) => {
      return item.price === maxPrice;
    });
  };

  const getLowerThan700k = () => {
    var mappedCars = mapCars(cars);
    return mappedCars.filter((item) => {
      return item.price < 700000;
    });
  };

  const getCarsWithHatchback = () => {
    var mappedCars = mapCars(cars);
    return [
      ...new Set(
        mappedCars
          .filter((item) => {
            return item.bodyStyle === "Hatchback";
          })
          .map((item) => {
            return JSON.stringify({ brand: item.brand, model: item.model });
          })
      ),
    ].map(JSON.parse);
  };

  const getBodyStyleTotalPrice = (bodyStyle) => {
    var mappedCars = mapCars(cars);
    return mappedCars
      .filter((item) => {
        return item.bodyStyle === bodyStyle;
      })
      .reduce(function (acc, val) {
        return acc + val.price;
      }, 0);
  };

  const formatMoney = (data) => {
    if (data < 1000) return data;
    else if (data >= 1000 && data < 1000000) return `${data / 1000}K`;
    else if (data > 1000000) return `${data / 1000000}M`;
  };

  // Return
  return (
    <>
      <h4>Solution:</h4>
      <section className="solution2">
        <section>
          <h1>Car/s with the highest Price</h1>
          {getHighestPrice().map(
            ({ brand, model, variant, bodyStyle, price }, index) => {
              return (
                <p
                  key={index}
                >{`${brand} ${model} ${variant} ${bodyStyle} - Php ${formatMoney(
                  price
                )}`}</p>
              );
            }
          )}
        </section>
        <section>
          <h1>Car/s with the less than 700,000</h1>
          <ol>
            {getLowerThan700k().map(
              ({ brand, model, variant, bodyStyle, price }, index) => {
                return (
                  <li key={index}>
                    <p>{`${brand} ${model} ${variant} ${bodyStyle} - Php ${formatMoney(
                      price
                    )}`}</p>
                  </li>
                );
              }
            )}
          </ol>
        </section>
        <section>
          <h1>Car/s that offers Hatchback</h1>
          <ol>
            {getCarsWithHatchback().map(({ brand, model }, index) => {
              return (
                <li key={index}>
                  <p>{`${brand} - ${model}`}</p>
                </li>
              );
            })}
          </ol>
        </section>
        <section>
          <h1>Total Price of All Hatchback Cars</h1>
          <p>{`Php ${formatMoney(getBodyStyleTotalPrice("Hatchback"))}`}</p>
        </section>
        <section>
          <h1>Total Price of All Sedan Cars</h1>
          <p>{`Php ${formatMoney(getBodyStyleTotalPrice("Sedan"))}`}</p>
        </section>
      </section>
    </>
  );
};

export default Solution;

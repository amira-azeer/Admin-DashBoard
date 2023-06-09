import { useTheme } from "@emotion/react";
import { ResponsiveChoropleth } from "@nivo/geo";
import { tokens } from "../theme";
import { mockGeographyData as data } from "../data/mockData";
import { geoFeatures } from "../data/mockGeoFeatures";

const GeographyChart = ({ isDashBoard = false }) => {
  const theme = useTheme();
  const colours = tokens(theme.palette.mode);

  return (
    <ResponsiveChoropleth
      data={data}
      theme={{
        axis: {
          domain: {
            line: {
              stroke: colours.grey[100],
            },
          },
          legend: {
            text: {
              fill: colours.grey[100],
            },
          },
          ticks: {
            line: {
              stroke: colours.grey[100],
              strokeWidth: 1,
            },
            text: {
              fill: colours.grey[100],
            },
          },
        },
        legends: {
          text: {
            fill: colours.grey[100],
          },
        },
      }}
      features={geoFeatures.features}
      margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
      domain={[0, 1000000]}
      unknownColor="#666666"
      label="properties.name"
      valueFormat=".2s"
      projectionScale={isDashBoard ? 40 : 150}
      projectionTranslation={isDashBoard ? [0.49, 0.6] : [0.5, 0.5]}
      projectionRotation={[0, 0, 0]}
      borderWidth={1.5}
      borderColor="#ffffff"
      legends={
        !isDashBoard
          ? [
              {
                anchor: "bottom-left",
                direction: "column",
                justify: true,
                translateX: 20,
                translateY: -100,
                itemsSpacing: 0,
                itemWidth: 94,
                itemHeight: 18,
                itemDirection: "left-to-right",
                itemTextColor: colours.grey[100],
                itemOpacity: 0.85,
                symbolSize: 18,
                effects: [
                  {
                    on: "hover",
                    style: {
                      itemTextColor: "#ffffff",
                      itemOpacity: 1,
                    },
                  },
                ],
              },
            ]
          : undefined
      }
    />
  );
};

export default GeographyChart;

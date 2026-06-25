import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { useTranslation } from "react-i18next";
import { useDarkMode } from "../hooks/useDarkMode";

const GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const VISITED = new Set(["300", "392", "578", "504", "380", "76"]);

const WorldMap = () => {
  const { isDark } = useDarkMode();
  const { t } = useTranslation();

  const defaultFill = isDark ? "#3c3431" : "#fef3c7";
  const visitedFill = "#d97706";
  const hoverFill = "#b45309";

  return (
    <div className="overflow-hidden rounded-xl bg-amber-50 dark:bg-stone-800">
      <ComposableMap
        projectionConfig={{ scale: 140, center: [15, 10] }}
        style={{ width: "100%", height: "auto" }}
      >
        <Geographies geography={GEO_URL}>
          {({ geographies }: { geographies: any[] }) =>
            geographies.map((geo: any) => {
              const visited = VISITED.has(String(geo.id));
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={visited ? visitedFill : defaultFill}
                  stroke={isDark ? "#57534e" : "#fff"}
                  strokeWidth={0.4}
                  style={{
                    default: { outline: "none" },
                    hover: {
                      fill: visited ? hoverFill : isDark ? "#57534e" : "#fde68a",
                      outline: "none",
                      cursor: visited ? "pointer" : "default",
                    },
                    pressed: { outline: "none" },
                  }}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>
      <div className="flex items-center justify-center gap-6 px-4 pb-4 text-xs text-amber-700 dark:text-amber-300">
        <span className="flex items-center gap-2">
          <span className="inline-block h-3 w-3 rounded-sm bg-amber-600" />
          {t("about.map_visited")}
        </span>
        <span className="flex items-center gap-2">
          <span className="inline-block h-3 w-3 rounded-sm bg-amber-100 ring-1 ring-amber-300 dark:bg-stone-700 dark:ring-stone-600" />
          {t("about.map_not_visited")}
        </span>
      </div>
    </div>
  );
};

export default WorldMap;

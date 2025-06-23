"use client"

import * as React from "react"
import { Label, Pie, PieChart, Sector } from "recharts"
import { PieSectorDataItem } from "recharts/types/polar/Pie"

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartConfig,
    ChartContainer,
    ChartStyle,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

const desktopData = [
    { month: "young", desktop: 186, fill: "#8EC6FF" },
    { month: "adult", desktop: 305, fill: "#2B7FFF" },
    { month: "old", desktop: 237, fill: "#165DFB" },
    { month: "old2", desktop: 173, fill: "#1447E6" },
]

const chartConfig = {
    young: {
        label: "18-24",
        color: "#8EC6FF",
    },
    adult: {
        label: "24-30",
        color: "#2B7FFF",
    },
    old: {
        label: "30-45",
        color: "#165DFB",
    },
    old2: {
        label: "45-60",
        color: "#1447E6",
    },
} satisfies ChartConfig

export default function ChartPieInteractive() {
    const id = "pie-interactive"
    const [activeMonth, setActiveMonth] = React.useState(desktopData[0].month)

    const activeIndex = React.useMemo(
        () => desktopData.findIndex((item) => item.month === activeMonth),
        [activeMonth]
    )
    const months = React.useMemo(() => desktopData.map((item) => item.month), [])

    return (
        <Card data-chart={id} className="flex flex-col bg-gradient-to-b from-[#171717] via-[#171717] to-[#222222] border-[#2b2b2b]">
            <ChartStyle id={id} config={chartConfig} />
            <CardHeader className="flex-row items-start space-y-0 pb-0">
                <div className="grid gap-1">
                    <CardTitle className={`text-white`}>Age of students</CardTitle>
                </div>
                <Select value={activeMonth} onValueChange={setActiveMonth}>
                    <SelectTrigger
                        className="ml-auto h-7 w-[130px] rounded-lg pl-2.5 text-white bg-[#212121] border-[#232323]" aria-label="Select a value">
                        <SelectValue placeholder="Select month" />
                    </SelectTrigger>
                    <SelectContent align="end" className="rounded-xl text-white bg-[#212121] border-[#232323]">
                        {months.map((key) => {
                            const config = chartConfig[key as keyof typeof chartConfig]

                            if (!config) {
                                return null
                            }

                            return (
                                <SelectItem key={key} value={key} className="rounded-lg [&_span]:flex focus:bg-[#303030] focus:text-white">
                                    <div className="flex items-center gap-2 text-xs">
                                        <span className="flex h-3 w-3 shrink-0 rounded-xs"
                                            style={{backgroundColor: `var(--color-${key})`,}}/>
                                            {config?.label}
                                    </div>
                                </SelectItem>
                            )
                        })}
                    </SelectContent>
                </Select>
            </CardHeader>
            <CardContent className="flex flex-1 justify-center pb-0">
                <ChartContainer
                    id={id}
                    config={chartConfig}
                    className="mx-auto aspect-auto h-[35vh] w-full"
                >
                    <PieChart>
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent hideLabel />}
                        />
                        <Pie
                            data={desktopData}
                            dataKey="desktop"
                            nameKey="month"
                            innerRadius={60}
                            strokeWidth={5}
                            activeIndex={activeIndex}
                            activeShape={({
                                              outerRadius = 0,
                                              ...props
                                          }: PieSectorDataItem) => (
                                <g>
                                    <Sector {...props} outerRadius={outerRadius + 10} />
                                    <Sector
                                        {...props}
                                        outerRadius={outerRadius + 25}
                                        innerRadius={outerRadius + 12}
                                    />
                                </g>
                            )}
                        >
                            <Label
                                content={({ viewBox }) => {
                                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                                        return (
                                            <text
                                                x={viewBox.cx}
                                                y={viewBox.cy}
                                                textAnchor="middle"
                                                dominantBaseline="middle"
                                            >
                                                <tspan
                                                    x={viewBox.cx}
                                                    y={viewBox.cy}
                                                    className=" text-3xl font-bold fill-white"
                                                >
                                                    {desktopData[activeIndex].desktop}
                                                </tspan>
                                                <tspan
                                                    x={viewBox.cx}
                                                    y={(viewBox.cy || 0) + 24}
                                                    className="fill-muted-foreground"
                                                >
                                                    Stedents
                                                </tspan>
                                            </text>
                                        )
                                    }
                                }}
                            />
                        </Pie>
                    </PieChart>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}

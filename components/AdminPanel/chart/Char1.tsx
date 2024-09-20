"use client"
import { TrendingUp } from "lucide-react"
import { Bar, BarChart, XAxis, YAxis } from "recharts"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"




export const description = "A mixed bar chart"



export default function Component({ counts, total}:{counts:any,total:any}) {


  
    // Transform the counts object into an array suitable for Recharts
    const chartData = Object.keys(counts)?.map((department:any) => ({
        department,
        count: counts[department],
        fill: `var(--color-${department?.replace(/\s/g, '-')?.toLowerCase()})`, // Dynamic fill color
    }));

    const chartConfig = Object.keys(counts)?.reduce((acc:any, department:any, index:any) => {
        acc[department] = {
            label: department.charAt(0).toUpperCase() + department.slice(1),
            color: `hsl(var(--chart-${index + 1}))`, // Assign a unique color to each department
        };
        return acc;
    }, {});



    return (
        <Card className="w-full">
            <CardHeader>
                <CardTitle>Bar Chart - Department Counts</CardTitle>
                <CardDescription>Query Counts by Department</CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig}>
                    <BarChart
                        accessibilityLayer
                        data={chartData}
                        layout="vertical"
                        margin={{
                            left: 40,
                        }}
                    >
                        <YAxis
                            dataKey="department"
                            type="category"
                            tickLine={false}
                            tickMargin={10}
                            axisLine={false}
                            tickFormatter={(value) =>
                                chartConfig[value as keyof typeof chartConfig]?.label
                            }
                        />
                        <XAxis dataKey="count" type="number" hide />
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent hideLabel />}
                        />
                        <Bar dataKey="count" layout="vertical" radius={5} />
                    </BarChart>
                </ChartContainer>
            </CardContent>
            <CardFooter className="flex-col items-start gap-2 text-sm">
                <div className="flex gap-2 font-medium leading-none">
                    Showing counts for each department
                </div>
                <div className="leading-none text-muted-foreground">
                    Based on the latest data Total Resul is {total}
                </div>
            </CardFooter>
        </Card>
    );
}

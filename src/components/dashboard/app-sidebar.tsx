'use client'

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel, SidebarHeader, useSidebar
} from "@/components/ui/sidebar"
import {Checkbox} from "@/components/ui/checkbox";
import {Slider} from "@/components/ui/slider";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {X} from "lucide-react";
import { useState } from "react";

const religions = [
    {
        id: 1,
        religion: "Hindu"
    },
    {
        id: 2,
        religion: "Muslim"
    },
    {
        id: 3,
        religion: "Christian"
    },
    {
        id: 4,
        religion: "Sikh"
    },
    {
        id: 5,
        religion: "Jain"
    },
    {
        id: 6,
        religion: "Buddhist"
    },
    {
        id: 7,
        religion: "Zoroastrian"
    },
    {
        id: 8,
        religion: "Judaism"
    },
    {
        id: 9,
        religion: "Donyi-Polo"
    },
    {
        id: 10,
        religion: "Atheism"
    },
    {
        id: 11,
        religion: "Sarna"
    },
    {
        id: 12,
        religion: "Gondi"
    },
    {
        id: 13,
        religion: "Baháʼí Faith"
    },
    {
        id: 14,
        religion: "Other"
    }
]

const education = [
    {
        id: 1,
        education: "High School"
    },
    {
        id: 2,
        education: "Bachelor's"
    },
    {
        id: 3,
        education: "Master's"
    },
    {
        id: 4,
        education: "PhD"
    },
    {
        id: 5,
        education: "Diploma"
    },
    {
        id: 6,
        education: "Graduate"
    },
    {
        id: 7,
        education: "Post Graduate"
    },
    {
        id: 8,
        education: "Doctorate"
    },
    {
        id: 9,
        education: "Other"
    }
]

export function AppSidebar(){
    const {setOpen} = useSidebar()
    const [ageRange, setAgeRange] = useState<[number, number]>([23, 30])
    const [salaryRange, setSalaryRange] = useState<[number, number]>([600_000, 1_200_000]);
    const [heightRange, setHeightRange] = useState<[number, number]>([5, 7]);
    const [selectedReligions, setSelectedReligions] = useState<number[]>([]);
    const [selectedEducations, setSelectedEducations] = useState<number[]>([]);
    return (
        <Sidebar>
            <SidebarHeader className={"flex flex-row items-center justify-between gap-4 px-4 py-4 md:pt-16"}>
                <h4 className={"text-2xl font-semibold text-primary"}>Filters</h4>
                <Button
                    variant={"destructive"}
                    className={"w-auto cursor-pointer"}
                    onClick={() => setOpen(false)}
                >
                    <X/>
                </Button>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Age range</SidebarGroupLabel>
                    <SidebarGroupContent>
                      <div className="mb-2 flex justify-between text-xs font-medium">
                        <span>{ageRange[0]}</span>
                        <span>{ageRange[1]}</span>
                      </div>
                      <Slider
                        value={ageRange}
                        onValueChange={(value) => setAgeRange(value as [number, number])}
                        min={18}
                        max={118}
                        step={1}
                      />
                    </SidebarGroupContent>
                </SidebarGroup>
                <SidebarGroup>
                    <SidebarGroupLabel>Salary range</SidebarGroupLabel>
                    <SidebarGroupContent>
                      <div className="mb-2 flex justify-between text-xs font-medium">
                        <span>₹{salaryRange[0].toLocaleString()}</span>
                        <span>₹{salaryRange[1].toLocaleString()}</span>
                      </div>
                      <Slider
                        value={salaryRange}
                        onValueChange={(value) => setSalaryRange(value as [number, number])}
                        min={0}
                        max={10_000_000}
                        step={50_000}
                      />
                    </SidebarGroupContent>
                </SidebarGroup>
                <SidebarGroup>
                    <SidebarGroupLabel>Height range</SidebarGroupLabel>
                    <SidebarGroupContent>
                      <div className="mb-2 flex justify-between text-xs font-medium">
                        <span>{heightRange[0]}&apos;</span>
                        <span>{heightRange[1]}&apos;</span>
                      </div>
                      <Slider
                        value={heightRange}
                        onValueChange={(value) => setHeightRange(value as [number, number])}
                        min={4}
                        max={8}
                        step={0.1}
                      />
                    </SidebarGroupContent>
                </SidebarGroup>
                <SidebarGroup>
                    <SidebarGroupLabel>Religion</SidebarGroupLabel>
                    <SidebarGroupContent className="space-y-2">
                      {religions.map(({ id, religion }) => (
                        <label
                          key={id}
                          htmlFor={`religion-${id}`}
                          className="flex items-center gap-2 text-sm cursor-pointer select-none"
                        >
                          <Checkbox
                            id={`religion-${id}`}
                            checked={selectedReligions.includes(id)}
                            onCheckedChange={(checked) =>
                              setSelectedReligions(
                                  (previous) => checked ? [...previous, id] : previous.filter((religionId) => religionId !== id)
                              )
                            }
                          />
                          <span>{religion}</span>
                        </label>
                      ))}
                    </SidebarGroupContent>
                </SidebarGroup>
                <SidebarGroup>
                    <SidebarGroupLabel>Location</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <Input type={"text"} placeholder={"Enter City"}/>
                    </SidebarGroupContent>
                </SidebarGroup>
                <SidebarGroup>
                    <SidebarGroupLabel>Education</SidebarGroupLabel>
                    <SidebarGroupContent className="space-y-2">
                        {education.map(({ id, education }) => (
                            <label
                                key={id}
                                htmlFor={`education-${id}`}
                                className="flex items-center gap-2 text-sm cursor-pointer select-none"
                            >
                                <Checkbox
                                    id={`education-${id}`}
                                    checked={selectedEducations.includes(id)}
                                    onCheckedChange={(checked) =>
                                        setSelectedEducations((previous) =>
                                            checked ? [...previous, id] : previous.filter((educationId) => educationId !== id)
                                        )
                                    }
                                />
                                <span>{education}</span>
                            </label>
                        ))}
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
                <Button variant={"outline"} className={"w-full text-center"}>Reset</Button>
                <Button className={"w-full text-center"}>Apply Filter</Button>
            </SidebarFooter>
        </Sidebar>
    )
}
import React, { useEffect, useRef, useState } from 'react'
import { SkillBarProps } from '@/Types';

function Skills({ skills }: SkillBarProps) {

    const ref = useRef<HTMLDivElement>(null)
    const [visible, setVisible] = useState<boolean>(false)
    const [progress, setProgress] = useState<number[]>(skills.map(() => 0))
    const [animatedProgress, setAnimatedProgress] = useState<number[]>(
        skills.map(() => 0)
    )
    useEffect(() => {
        function OnScroll() {
            if (ref.current) {
                const { top, bottom } = ref.current.getBoundingClientRect()
                const isVisible = top < window.innerHeight && bottom >= 0
                if (isVisible && !visible) {
                    setVisible(true)
                    setProgress(skills.map((skill) => skill.level))
                    setAnimatedProgress(skills.map(() => 0))
                }
            }
        }
        window.addEventListener('scroll', OnScroll)
        OnScroll()
        return () => {
            window.removeEventListener('scroll', OnScroll)
        }
    }, [skills, visible]);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setAnimatedProgress((prevProgress) => {
                const newProgress = prevProgress.map((value, index) => {
                    const diff = progress[index] - value;
                    const step = Math.ceil(diff / 10);
                    return value + step;
                });
                return newProgress;
            })
        }, 100);

        return () => {
            clearInterval(intervalId);
        }
    }, [progress]);

    return (
        <div>
            <div ref={ref} className='grid md:grid-cols-1 gap-4 p-10'>
                {
                    skills.map((skill, index) => (
                        <div key={skill.name} className='mb-4'>
                            <div className='flex justify-between items-center mb-2'>
                                <span>{skill.name}</span>
                                <span className='font-bold text-sm'>{animatedProgress[index]}%</span>
                            </div>
                            <div className='relative w-full h-1 bg-Black rounded-full overflow-hidden'>
                                <div
                                    className='absolute top-0 left-0 h-full bg-WhiteGray rounded-full'
                                    style={{ width: `${visible ? animatedProgress[index] : progress[index]}%`, transition: 'width 1s' }} ></div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div >
    )
}

export default Skills
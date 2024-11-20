import { useAnimations, useGLTF } from "@react-three/drei";
import { applyProps, useFrame, useLoader } from "@react-three/fiber";
import { useControls} from 'leva'
import { useEffect, useRef } from "react";
import { forwardRef } from 'react'

export function Josh({ animation = 'Idle', ...props }) {
    const model = useGLTF('./josh.glb')
    const animations = useAnimations(model.animations, model.scene)
    
    useEffect(() => {      
        const action = animations.actions[animation]
        if (action) {
            // Stop all current animations
            Object.values(animations.actions).forEach(a => {
                if (a !== action) {
                    a.fadeOut(0.5)
                }
            })

            // Play new animation
            action
                .reset()
                .fadeIn(0.5)
                .play()

            return () => {
                action.fadeOut(0.5)
            }
        }
    }, [animation, animations.actions])

    return <primitive object={model.scene} {...props}/>
}
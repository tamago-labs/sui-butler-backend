"use client";

import React, { useState, useRef, useEffect } from 'react';
import { ArrowRight, Wallet, Code, Zap, Command, Infinity, Banknote, ArrowUpRight } from 'lucide-react';

export default function Hero() {


    return (
        <>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative">
                <div className="relative z-10 flex flex-col lg:flex-row items-center gap-10">
                    {/* Left content */}
                    <div className="w-full lg:w-3/5 text-white">

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                            Seamless AI-to-Sui <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
                                with zkLogin
                            </span>
                        </h1>

                        <p className="text-lg text-blue-100/80 mb-8 max-w-xl">
                            Specialized Model Context Protocol service enabling AI models to seamlessly interact with the Sui blockchain ecosystem through zkLogin

                        </p>
                        <div className="flex flex-col sm:flex-row gap-4   mb-16">
                            <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all flex items-center justify-center">
                                Setup<ArrowRight className="ml-2 w-4 h-4" />
                            </button>
                            <button className="px-7 py-3 bg-blue-800/40 hover:bg-blue-700/50 rounded-lg font-medium text-blue-200 transition flex items-center justify-center border border-blue-700/40">
                                Documentation
                            </button>
                        </div>

                    </div>
                    {/* Right illustration */}
                    <div className="hidden lg:flex lg:w-2/5">
                        <GridRippleEffect />
                    </div>

                </div>

            </div>


            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden opacity-30">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-700 rounded-full filter blur-3xl"></div>
            </div>

        </>
    );
}

const GridRippleEffect = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas: any = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId: any;

        // Set canvas dimensions
        const setCanvasDimensions = () => {
            canvas.width = canvas.clientWidth;
            canvas.height = canvas.clientHeight;
        };

        setCanvasDimensions();
        window.addEventListener('resize', setCanvasDimensions);

        // Grid configuration
        const gridSpacing = 30;
        const cols = Math.floor(canvas.width / gridSpacing) + 1;
        const rows = Math.floor(canvas.height / gridSpacing) + 1;

        // Colors - Updated to Base blue theme
        const dotColor = '#3B82F6'; // Primary blue
        const dotSecondaryColor = '#60A5FA'; // Secondary blue

        // Ripples
        const ripples: any = [];
        const maxRipples = 3;

        // Grid points
        const grid: any = [];
        for (let i = 0; i < cols; i++) {
            grid[i] = [];
            for (let j = 0; j < rows; j++) {
                grid[i][j] = {
                    x: i * gridSpacing,
                    y: j * gridSpacing,
                    baseSize: 1.5,
                    size: 1.5, // dot size
                    color: dotColor,
                    affected: false
                };
            }
        }

        // Create a ripple
        // Create a ripple
        const createRipple = () => {
            if (ripples.length < maxRipples) {
                const colIndex = Math.floor(Math.random() * cols);
                const rowIndex = Math.floor(Math.random() * rows);

                ripples.push({
                    x: grid[colIndex][rowIndex].x,
                    y: grid[colIndex][rowIndex].y,
                    radius: 0,
                    maxRadius: Math.max(canvas.width, canvas.height) * 0.6,
                    speed: Math.random() * 2 + 2,
                    color: Math.random() > 0.5 ? dotColor : dotSecondaryColor,
                    strength: Math.random() * 4 + 2
                });
            }
        };

        // Automatically create ripples at intervals
        const rippleInterval = setInterval(() => {
            createRipple();
        }, 2000);

        // Handle ripple effects on grid points
        const updateGrid = () => {
            // Reset all points to base size
            for (let i = 0; i < cols; i++) {
                for (let j = 0; j < rows; j++) {
                    grid[i][j].size = grid[i][j].baseSize;
                    grid[i][j].color = dotColor;
                    grid[i][j].affected = false;
                }
            }

            // Apply ripple effects
            ripples.forEach((ripple: any) => {
                for (let i = 0; i < cols; i++) {
                    for (let j = 0; j < rows; j++) {
                        const point = grid[i][j];
                        const distance = Math.sqrt(
                            Math.pow(point.x - ripple.x, 2) +
                            Math.pow(point.y - ripple.y, 2)
                        );

                        // Check if point is within ripple effect range
                        if (Math.abs(distance - ripple.radius) < 40) {
                            const effect = Math.max(0, 1 - Math.abs(distance - ripple.radius) / 40);

                            // Only apply if this effect is stronger than any existing effect
                            if (!point.affected || effect > point.affected) {
                                point.size = point.baseSize + ripple.strength * effect;
                                point.color = ripple.color;
                                point.affected = effect;
                            }
                        }
                    }
                }
            });
        };

        // Draw the grid and ripples
        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw grid
            for (let i = 0; i < cols; i++) {
                for (let j = 0; j < rows; j++) {
                    const point = grid[i][j];

                    // Draw point
                    ctx.beginPath();
                    ctx.arc(point.x, point.y, point.size, 0, Math.PI * 2);
                    ctx.fillStyle = point.color;
                    ctx.fill();
                }
            }

            // Draw ripple circles with blue theme
            ripples.forEach((ripple: any) => {
                ctx.beginPath();
                ctx.arc(ripple.x, ripple.y, ripple.radius, 0, Math.PI * 2);
                ctx.strokeStyle = `rgba(54, 241, 205, ${Math.max(0, 0.5 - ripple.radius / ripple.maxRadius * 0.5)})`;
                ctx.lineWidth = 1;
                ctx.stroke();
            });
        };

        // Animation function
        const animate = () => {
            // Update ripples
            for (let i = ripples.length - 1; i >= 0; i--) {
                ripples[i].radius += ripples[i].speed;

                // Remove ripples that have expanded too far
                if (ripples[i].radius > ripples[i].maxRadius) {
                    ripples.splice(i, 1);
                }
            }

            updateGrid();
            draw();

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', setCanvasDimensions);
            cancelAnimationFrame(animationFrameId);
            clearInterval(rippleInterval);
        };
    }, []);

    return (
        <div className="w-full h-96 md:h-[500px] relative ">
            <canvas
                ref={canvasRef}
                className="w-full h-full"
            />
        </div>
    );
};
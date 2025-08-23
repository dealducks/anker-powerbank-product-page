"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from 'lucide-react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogOverlay,
    DialogPortal,
    DialogTitle,
} from "@/components/ui/dialog"

interface ImageGalleryModalProps {
    images: Array<{ src: string; alt: string }>
    isOpen: boolean
    onClose: () => void
    initialIndex?: number
}

export function ImageGalleryModal({
                                      images,
                                      isOpen,
                                      onClose,
                                      initialIndex = 0
                                  }: ImageGalleryModalProps) {
    const [currentIndex, setCurrentIndex] = useState(initialIndex)
    const [isZoomed, setIsZoomed] = useState(false)

    // <CHANGE> Reset zoom when image changes
    useEffect(() => {
        setIsZoomed(false)
    }, [currentIndex])

    // <CHANGE> Keyboard navigation support
    useEffect(() => {
        if (!isOpen) return

        const handleKeyDown = (e: KeyboardEvent) => {
            switch (e.key) {
                case 'ArrowLeft':
                    e.preventDefault()
                    goToPrevious()
                    break
                case 'ArrowRight':
                    e.preventDefault()
                    goToNext()
                    break
                case 'Escape':
                    e.preventDefault()
                    onClose()
                    break
            }
        }

        document.addEventListener('keydown', handleKeyDown)
        return () => document.removeEventListener('keydown', handleKeyDown)
    }, [isOpen, currentIndex])

    const goToPrevious = () => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
    }

    const goToNext = () => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
    }

    const goToImage = (index: number) => {
        setCurrentIndex(index)
    }

    const toggleZoom = () => {
        setIsZoomed(!isZoomed)
    }

    if (!images.length) return null

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogPortal>
                {/* <CHANGE> Enhanced backdrop with better blur and gradient */}
                <DialogOverlay className="fixed inset-0 z-50 bg-gradient-to-br from-black/90 via-black/95 to-black/90 backdrop-blur-md data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 duration-300" />

                {/* <CHANGE> Redesigned modal with better proportions and styling */}
                <DialogContent className="fixed z-50 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[95vw] max-w-7xl h-[90vh] p-0 overflow-hidden bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border-0 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 duration-300">

                    <DialogHeader className="sr-only">
                        <DialogTitle>Product Image Gallery</DialogTitle>
                        <DialogDescription>Browse through product images</DialogDescription>
                    </DialogHeader>

                    {/* <CHANGE> Enhanced header with image counter and controls */}
                    <div className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between p-4 bg-gradient-to-b from-black/50 to-transparent">
                        <div className="flex items-center gap-3">
                            <div className="px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium">
                                {currentIndex + 1} / {images.length}
                            </div>
                            <button
                                onClick={toggleZoom}
                                className="p-2 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-colors duration-200"
                                aria-label={isZoomed ? "Zoom out" : "Zoom in"}
                            >
                                {isZoomed ? <ZoomOut className="w-4 h-4" /> : <ZoomIn className="w-4 h-4" />}
                            </button>
                        </div>

                        <button
                            onClick={onClose}
                            className="p-2 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-colors duration-200"
                            aria-label="Close gallery"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    {/* <CHANGE> Main image area with improved styling and zoom functionality */}
                    <div className="relative w-full h-[calc(100%-120px)] bg-gray-50 dark:bg-gray-800 flex items-center justify-center overflow-hidden">
                        <div className={`relative transition-transform duration-300 ${isZoomed ? 'scale-150 cursor-grab active:cursor-grabbing' : 'scale-100'}`}>
                            <Image
                                src={images[currentIndex].src || "/placeholder.svg"}
                                alt={images[currentIndex].alt}
                                width={1200}
                                height={800}
                                className="max-w-full max-h-full object-contain select-none"
                                priority
                                sizes="(max-width: 1400px) 95vw, 1400px"
                            />
                        </div>

                        {/* <CHANGE> Redesigned navigation arrows with better positioning and styling */}
                        {images.length > 1 && (
                            <>
                                <button
                                    onClick={goToPrevious}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white dark:hover:bg-gray-700 transition-all duration-200 hover:scale-110"
                                    aria-label="Previous image"
                                >
                                    <ChevronLeft className="w-6 h-6 text-gray-800 dark:text-white" />
                                </button>

                                <button
                                    onClick={goToNext}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white dark:hover:bg-gray-700 transition-all duration-200 hover:scale-110"
                                    aria-label="Next image"
                                >
                                    <ChevronRight className="w-6 h-6 text-gray-800 dark:text-white" />
                                </button>
                            </>
                        )}
                    </div>

                    {/* <CHANGE> Enhanced thumbnail strip with better design and animations */}
                    {images.length > 1 && (
                        <div className="absolute bottom-0 left-0 right-0 p-4 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
                            <div className="flex items-center justify-center gap-2 overflow-x-auto pb-2">
                                {images.map((image, index) => (
                                    <button
                                        key={index}
                                        onClick={() => goToImage(index)}
                                        className={`relative flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden transition-all duration-200 ${
                                            index === currentIndex
                                                ? 'ring-2 ring-blue-500 ring-offset-2 ring-offset-white dark:ring-offset-gray-900 scale-110'
                                                : 'hover:scale-105 opacity-70 hover:opacity-100'
                                        }`}
                                        aria-label={`View image ${index + 1}`}
                                    >
                                        <Image
                                            src={image.src || "/placeholder.svg"}
                                            alt={image.alt}
                                            fill
                                            className="object-cover"
                                            sizes="64px"
                                        />
                                        {index === currentIndex && (
                                            <div className="absolute inset-0 bg-blue-500/20" />
                                        )}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                </DialogContent>
            </DialogPortal>
        </Dialog>
    )
}

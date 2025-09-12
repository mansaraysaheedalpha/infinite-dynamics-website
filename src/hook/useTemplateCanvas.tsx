// src/hooks/useTemplateCanvas.ts
"use-client";

import { useEffect, useRef } from "react";
import fabric from "fabric"; // ✅ This is the correct import statement

export const useTemplateCanvas = (
  canvasRef: React.RefObject<HTMLCanvasElement | null>
) => {
  const fabricCanvasRef = useRef<fabric.Canvas | null>(null);

  useEffect(() => {
    if (!canvasRef.current) {
      return;
    }

    const canvas = new fabric.Canvas(canvasRef.current, {
      width: 800,
      height: 1000,
      backgroundColor: "#0D253F",
    });
    fabricCanvasRef.current = canvas;

    return () => {
      if (fabricCanvasRef.current) {
        fabricCanvasRef.current.dispose();
        fabricCanvasRef.current = null;
      }
    };
  }, [canvasRef]);

  const addText = (
    text: string,
    options: fabric.ITextboxOptions,
    id: string
  ) => {
    const canvas = fabricCanvasRef.current;
    if (!canvas) return;
    const textObject = new fabric.Textbox(text, {
      ...options,
      objectCaching: false,
    });

    // @ts-expect-error - We are adding a custom 'id' property for our own tracking
    textObject.id = id;
    canvas.add(textObject);
    canvas.renderAll();
  };

  const updateText = (id: string, newText: string) => {
    const canvas = fabricCanvasRef.current;
    if (!canvas) return;

    const textObject = canvas.getObjects().find((obj: fabric.Object) => {
      // @ts-expect-error - We are accessing our custom 'id' property
      return obj.id === id;
    }) as fabric.Textbox;

    if (textObject) {
      textObject.set("text", newText);
      canvas.renderAll();
    }
  };

  return { addText, updateText };
};

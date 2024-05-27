import React from "react"

import { Divider, Text } from ".."
import "./card.styles.scss"

interface CardProps {
  title?: string;
  align?: "start" | "center";
  className?: string
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({
  title,
  align = "start",
  className,
  children
}) => {

  const CARD_CLASSES = [
    "card",
    align === "center" ? "text-center" : "text-start",
    className
  ].filter(Boolean).join(" ")

  return (
    <div className={CARD_CLASSES}>
      <div className="px-3">
        <div className="card-body">
          {/* Title */}
          {title && <>
            <Text size="4" weight="bold">
              {title}
            </Text>

            <Divider className="mt-2 mb-4" />
          </>}

          {/* Default */}
          {children}
        </div>
      </div>
    </div>
  )
}

export default Card

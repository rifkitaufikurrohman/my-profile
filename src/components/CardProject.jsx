import React from 'react'

const CardProject = ({ id, image, title, description, techStack, linkDemo }) => {
  const isLinkValid = linkDemo && linkDemo !== '#';
  const CardWrapper = isLinkValid ? 'a' : 'div';
  const wrapperProps = isLinkValid 
    ? { href: linkDemo, target: '_blank', rel: 'noopener noreferrer' } 
    : {};

  return (
    <CardWrapper
      key={id}
      {...wrapperProps}
      className={`group w-full max-w-[320px] bg-navbar/50 backdrop-blur-sm rounded-xl sm:rounded-2xl overflow-hidden border border-gold/20 hover:border-gold/40 transition-all duration-300 hover:scale-102 block ${
        isLinkValid ? 'cursor-pointer' : ''
      }`}
    >
      <div className="aspect-video overflow-hidden bg-black/20">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-100"
        />
      </div>

      <div className="p-4 sm:p-6 space-y-2 sm:space-y-3">
        <h4 className="text-lg sm:text-xl font-semibold text-white group-hover:text-gold transition-colors">
          {title}
        </h4>
        <p className="text-gray-400 text-xs sm:text-sm">
          {description}
        </p>
        <div className="flex gap-2 flex-wrap">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="text-xs px-2.5 sm:px-3 py-1 bg-gold/10 text-gold rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </CardWrapper>
  )
}

export default CardProject
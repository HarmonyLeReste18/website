require 'liquid'
require 'uri'

module Titlelize
  def titlelize(input)
    return input.gsub(/^\d+_|_\d+\.jpg$/i, '').split('_').map(&:capitalize).join(' ')
  end
end

Liquid::Template.register_filter(Titlelize)
